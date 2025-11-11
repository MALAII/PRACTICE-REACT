//Create a Student Registration Form with Name, Age, and Course.
//  Display all entered details below after submission.
import { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} /> <br />

        <label>Age:</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} /> <br />

        <label>Course:</label>
        <input value={course} onChange={(e) => setCourse(e.target.value)} /> <br />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Student Details</h3>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Course: {course}</p>
        </div>
      )}
    </>
  );
}

export default StudentForm;
