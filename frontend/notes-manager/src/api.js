const API_BASE_URL = 'https://notesmanager-3.onrender.com';

// Login function
export const login = async (email) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users?email=${email}`);
    const users = await response.json();
    return users.length ? users[0] : null;
  } catch (error) {
    console.error('Error during login:', error);
    return null;
  }
};

// Signup function
export const signup = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.ok ? await response.json() : null;
  } catch (error) {
    console.error('Error during signup:', error);
    return null;
  }
};

// Fetch notes for a specific user
export const fetchNotes = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes?userId=${userId}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching notes:', error);
    return [];
  }
};

// Save a new note
export const saveNote = async (note) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });
    return response.ok ? await response.json() : null;
  } catch (error) {
    console.error('Error saving note:', error);
    return null;
  }
};

// Update an existing note

export const updateNote = async (id, updatedNote) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: 'PATCH', // Use PUT if PATCH is not supported
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedNote),
    });
    return response.ok ? await response.json() : null;
  } catch (error) {
    console.error('Error updating note:', error);
    return null;
  }
};

// Delete a note
export const deleteNote = async (noteId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes/${noteId}`, {
      method: 'DELETE',
    });
    return response.ok;
  } catch (error) {
    console.error('Error deleting note:', error);
    return false;
  }
};
