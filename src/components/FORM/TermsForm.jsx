// Create a form with a checkbox (“Accept Terms & Conditions”).
// Disable the Submit button until it’s checked.
import { useState } from "react";

function TermsForm() {
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          Accept Terms & Conditions
        </label>
        <br />

        <button type="submit" disabled={!accepted}>
          Submit
        </button>
      </form>
    </>
  );
}

export default TermsForm;
