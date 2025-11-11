import { useEffect, useState } from "react";

function CountExample() {
  const [count, setCount] = useState(0);

  // Runs on every render
//   useEffect(() => {
//     console.log("1️⃣ I run after every render");
//   });

  // Runs only on first render
//   useEffect(() => {
//     console.log("2️⃣ I run only once (when page loads)");
//   }, []);

  // Runs only when 'count' changes
  useEffect(() => {
    console.log("3️⃣ Count changed to:", count);
  }, [count]);

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </>
  );
}

export default CountExample;
