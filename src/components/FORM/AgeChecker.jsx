// Create a form with an Age input.
// If the user enters less than 18, show “You are a minor.” Otherwise, show “You are an adult.”
import { useState } from "react";

function AgeChecker() {
  const [age, setAge] = useState("");

  return (
    <>
      <form>
        <label>Enter Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </form>

      {age && (
        <h3>{age < 18 ? "You are a minor" : "You are an adult"}</h3>
      )}
    </>
  );
}

export default AgeChecker;
