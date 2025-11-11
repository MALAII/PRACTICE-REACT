// Create a form with Gender (radio buttons) and show the selected gender live.
import { useState } from "react";

function GenderForm() {
  const [gender, setGender] = useState("");

  return (
    <>
      <form>
        <label>
          <input
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
      </form>

      <h3>Selected Gender: {gender}</h3>
    </>
  );
}

export default GenderForm;
