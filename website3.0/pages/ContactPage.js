"use client";
import React, { useState } from "react";
import "@stylesheets/contact.css";

function ContactPage() {
  // State variables to manage form state and UI messages
  const [selectedRating, setSelectedRating] = useState(0); 
  const [showError, setShowError] = useState(false); 
  const [showThankYouMessage, setShowThankYouMessage] = useState(false); 

  // Function to handle click on star rating
  const handleStarClick = (value) => {
    // Update selectedRating state with the clicked star value
    setSelectedRating(value); 
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault(); 

    // Validation: Check if a rating is selected
    if (selectedRating === 0) {
      // Show error message if rating is not selected
      setShowError(true); 
      // Hide error message after 2 seconds
      setTimeout(() => setShowError(false), 2000); 
       // Exit function early if validation fails
      return;
    }

    // Display thank you message and reset form after 3 seconds
    setShowThankYouMessage(true); 
    setTimeout(() => {
      // Hide thank you message after 3 seconds
      setShowThankYouMessage(false); 
      // Reset the form fields
      document.getElementById("contact-form").reset();
      // Reset selectedRating state
      setSelectedRating(0); 
    }, 3000);
  };

  return (
    <div>
      <div className="container">
        <img src="/rateus.png" className="contact-img" alt="rateus" />
        <div className="form-container">
          <h1>Contact Us</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            {/* Name input */}
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Name:"
            />

            {/* Email input */}
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email:"
            />

            {/* Comment textarea */}
            <textarea
              id="comment"
              name="comment"
              required
              placeholder="Comment:"
            ></textarea>

            {/* Rating section */}
            <label htmlFor="rating" id="rate">
              Rating:
            </label>
            <div id="rating">
              {/* Generate star icons for rating selection */}
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  className="star"
                  data-value={value}
                  onClick={() => handleStarClick(value)}
                  style={{ color: selectedRating >= value ? "#FFD700" : "#000" }}
                >
                  &#9733;
                </span>
              ))}
            </div>
            {/* Error message for rating selection */}
            {showError && <p id="error">Please Give Any Rating</p>}
            
            {/* Submit button */}
            <button type="submit" id="button">
              Submit
            </button>

            {/* Thank you message after successful submission */}
            {showThankYouMessage && (
              <p id="thank-you-message">
                Thank you !!
                <br />
                We will connect soon.
              </p>
            )}
          </form>
        </div>
        <img src="rateus.png" className="contact-img1" alt="rateus" />
      </div>
    </div>
  );
}

export default ContactPage;
