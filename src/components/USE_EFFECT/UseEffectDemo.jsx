import { useState, useEffect } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // 🌀 Runs after EVERY render
  useEffect(() => {
    console.log("Effect 1: Runs after every render");
    // setMessage("Effect 1: Runs after every render");
  });

  // 🎯 Runs only ONCE when the page loads
  useEffect(() => {
    console.log("Effect 2: Runs only once (page loaded)");
    alert("Page is loaded! (Effect 2)");
  }, []);

  // 🔁 Runs only when count changes
  useEffect(() => {
    console.log("Effect 3: Runs only when count changes");
    setMessage(`Effect 3: Count changed to ${count}`);
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>useEffect Demo</h2>
      <p>Count: {count}</p>
      <p style={{ color: "blue" }}>{message}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default UseEffectDemo;
