// Make an array of courses and show them in a dropdown; when one is selected, display the selected course below.
import { useState } from "react";

function CourseDropdown() {
  const courses = ["HTML", "CSS", "JavaScript", "React"];
  const [selected, setSelected] = useState("");

  return (
    <>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value={selected}>-- Select Course --</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>
            {course}
          </option>
        ))}
      </select>

      {selected && <p>You selected: {selected}</p>}
    </>
  );
}
export default CourseDropdown;
