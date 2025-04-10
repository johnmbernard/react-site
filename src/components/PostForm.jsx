import React, { useState } from "react";
import AutoResizeTextarea from "./AutoResizeTextarea";
import FormHandler from "./FormHandler"; // Import the reusable component

function PostForm() {
  const [selectedOption, setSelectedOption] = useState(""); // Tracks post/feedback selection
  const [formData, setFormData] = useState({}); // Tracks form input values

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value); // Update the selected option
    setFormData({}); // Reset form data when the option changes
  };

  const updateFeed = (newData) => {
    console.log("New data added to feed:", newData);
    // Add logic to dynamically update the feed (e.g., update state)
  };

  const determineDatabasePath = () => {
    if (selectedOption === "post") {
      return "posts"; // Path in Firebase for posts
    } else if (selectedOption === "feedback") {
      return "feedback"; // Path in Firebase for feedback
    }
    return ""; // Default empty path
  };

  return (
    <FormHandler
      formData={formData}
      setFormData={setFormData}
      databasePath={determineDatabasePath()} // Firebase database path
      onSuccess={updateFeed} // Callback on successful write
    >
      <label htmlFor="dropdown">Post or Feedback?</label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="">--Select an option--</option>
        <option value="post">Post</option>
        <option value="feedback">Feedback</option>
      </select>

      {selectedOption === "post" && (
        <div>
          <label className="post_text">
            <AutoResizeTextarea
              name="message"
              className="textarea"
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              placeholder="What would you like to post?..."
            />
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
            <AutoResizeTextarea
              name="feedback"
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              placeholder="Your feedback..."
            />
          </label>
          <label>
            Rating:
            <select
              name="rating"
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            >
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
    </FormHandler>
  );
}

export default PostForm;