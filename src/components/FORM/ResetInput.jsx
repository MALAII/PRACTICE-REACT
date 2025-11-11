// Create a form with a Text input and a Reset button that clears the inpu
import { useState } from "react";

function ResetInput() {
  const [text, setText] = useState("");

  const handleReset = () => {
    setText("");
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleReset}>Reset</button>
      <h3>You typed: {text}</h3>
    </>
  );
}

export default ResetInput;
