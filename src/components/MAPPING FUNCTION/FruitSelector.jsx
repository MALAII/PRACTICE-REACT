// Combine .map() and a click event — when you click an item from the list, show a message like “You selected Mango”.
import { useState } from "react";

function FruitSelector() {
  const fruits = ["Apple", "Mango", "Banana", "Orange"];
  const [selected, setSelected] = useState("");
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {fruits.map((fruit, index) => (
          <li
            key={index}
            onClick={() => setSelected(fruit)}
            style={{
              cursor: "pointer",
              padding: "5px",
              border: "1px solid gray",
              width: "120px",
              marginBottom: "5px",
            }}
          >
            {fruit}
          </li>
        ))}
      </ul>
      {selected && <h3>You selected {selected}</h3>}
    </>
  );
}
export default FruitSelector;
