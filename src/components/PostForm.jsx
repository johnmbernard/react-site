import React, { useState } from "react";
import AutoResizeTextarea from "./AutoResizeTextarea";
import FormHandler from "./FormHandler"; // Import the reusable component

function DynamicForm() {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({});

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value); // Update the selected option
    setFormData({}); // Reset form data when the option changes
  };

  const updateFeed = (newData) => {
    console.log("New data added to feed:", newData);
    // Add logic to dynamically update the feed (state or API)
  };

  const determineEndpoint = () => {
    // Define different endpoints based on selected option
    if (selectedOption === "post") {
      return "https://your-api-endpoint.com/posts";
    } else if (selectedOption === "feedback") {
      return "https://your-api-endpoint.com/feedback";
    }
    return "";
  };

  return (
    <FormHandler
      formData={formData}
      setFormData={setFormData}
      endpoint={determineEndpoint()}
      onSuccess={updateFeed}
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
              name="post"
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

export default DynamicForm;