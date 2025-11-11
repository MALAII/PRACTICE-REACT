// Create a Feedback Form with a textarea.
// When the user types, show the character count below it.
import { useState } from "react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  return (
    <>
      <form>
        <label>Your Feedback:</label> <br />
        <textarea
          rows="4"
          cols="40"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </form>

      <p>Character Count: {feedback.length}</p>
    </>
  );
}

export default FeedbackForm;
