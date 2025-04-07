import React from 'react';

const FormHandler = ({ formData, setFormData, endpoint, onSuccess, children }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Data successfully sent:', result);

      if (onSuccess) {
        onSuccess(result); // Callback function to process success
      }
    } catch (error) {
      console.error('Error submitting form:', error);
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