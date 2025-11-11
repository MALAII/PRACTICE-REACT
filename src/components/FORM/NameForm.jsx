// Create a form with a single Name input and show live output below as “Hello, [Name]”.
import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  return (
    <>
      <form>
        <label>Enter Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      <h2>Hello, {name}</h2>
    </>
  );
}

export default NameForm;
