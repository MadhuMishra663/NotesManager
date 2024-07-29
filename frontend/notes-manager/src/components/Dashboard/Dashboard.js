
import React, { useState, useEffect } from 'react';
import { fetchNotes, saveNote, updateNote, deleteNote } from '../../api';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';

function Dashboard({ userId, setIsLoggedIn }) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    const loadNotes = async () => {
      const fetchedNotes = await fetchNotes(userId);
      setNotes(fetchedNotes);
    };
    loadNotes();
  }, [userId]);

  const handleSaveNote = async () => {
    const note = { content: newNote, userId };
    const savedNote = await saveNote(note);
    if (savedNote) {
      setNotes([...notes, savedNote]);
      setNewNote('');
    }
  };

  const handleUpdateNote = async (id, updatedNote) => {
    const updated = await updateNote(id, updatedNote);
    if (updated) {
      setNotes(notes.map(note => (note.id === id ? updated : note)));
    }
  };

  const handleDeleteNote = async (id) => {
    const deleted = await deleteNote(id);
    if (deleted) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  return (
    <>
      <Navbar isLoggedIn={true} setIsLoggedIn={setIsLoggedIn} />
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        <div className="note-section">
          <h3>Write a Note</h3>
          <textarea 
            value={newNote} 
            onChange={(e) => setNewNote(e.target.value)} 
            placeholder="Write your note here..." 
          />
          <button onClick={handleSaveNote}>Save Note</button>
        </div>
        <div className="saved-notes-section">
          <h3>Saved Notes</h3>
          <ul>
            {notes.map((note, index) => (
              <li key={index} className={`note-item ${note.important ? 'important' : ''}`}>
                <span>{note.content}</span>
                <button onClick={() => handleUpdateNote(note.id, { ...note, important: !note.important })}>
                  {note.important ? 'Unmark Important' : 'Mark Important'}
                </button>
                <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
