import React, { useState } from "react";
import AutoResizeTextarea from "./AutoResizeTextarea";

function DynamicForm() {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({});

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value); // Update the selected option
    setFormData({}); // Reset form data when the option changes
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with data: ${JSON.stringify(formData)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="dropdown">Post or Feedback?</label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="">--Select an option--</option>
        <option value="post">Post</option>
        <option value="feedback">Feedback</option>
      </select>

      {selectedOption === "post" && (
        <div>
          <label className="post_text">
            <AutoResizeTextarea name="post" onChange={handleInputChange} 
            placeholder="What would you like to post?..." />
          </label>
          <div className="post_interaction">
            <button type="button" onClick={() => alert("Image Popup")}>img</button>
            <button type="button" onClick={() => alert("Link Added")}>link</button>
          </div>
        </div>
      )}

      {selectedOption === "feedback" && (
        <div>
          <label>
            <AutoResizeTextarea name="feedback" 
            onChange={handleInputChange} placeholder="feedback..."/>
          </label>
          <label>
            Rating:
            <select name="rating" onChange={handleInputChange}>
              <option value="">--Rate us--</option>
              <option value="one_star">★</option>
              <option value="two_stars">★★</option>
              <option value="three_stars">★★★</option>
              <option value="four_stars">★★★★</option>
              <option value="five_stars">★★★★★</option>
            </select>
          </label>
        </div>
      )}

      <button type="submit" disabled={!selectedOption}>
        Submit
      </button>
    </form>
  );
}

export default DynamicForm;
