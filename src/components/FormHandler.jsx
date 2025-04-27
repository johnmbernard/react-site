import React from 'react';
import { ref, set, push } from 'firebase/database';
import { database } from '../firebaseconfig/firebaseConfig'; // Import Firebase config

const FormHandler = ({ formData, setFormData, databasePath, onSuccess, children }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (!databasePath) {
        throw new Error('Database path is required');
      }
      console.log("Submitting data:", formData);

      // Push creates a unique ID for each entry (great for posts & feedback)
      const newPostRef = push(ref(database, databasePath));
      await set(newPostRef, formData);

      console.log('Data successfully written to Firebase:', formData);

      if (onSuccess) {
        onSuccess(formData); // Callback to update the feed dynamically
      }

      // Optionally reset form data
      setFormData({});
      
    } catch (error) {
      console.error('Error writing to database:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {children} {/* Render form inputs dynamically */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormHandler;