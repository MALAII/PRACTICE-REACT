// Make an array of **student objects** `{name, mark}` and highlight names with marks greater than 80.
function StudentMarks() {
  const students = [
    { name: "Arun", mark: 75 },
    { name: "Priya", mark: 88 },
    { name: "Vimal", mark: 92 },
    { name: "Kavi", mark: 67 },
  ];

  return (
    <div>
      <h2>Student Marks</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((student, index) => (
          <li
            key={index}
            style={{
              color: student.mark > 80 ? "green" : "black",
              fontWeight: student.mark > 80 ? "bold" : "normal",
            }}
          >
            {student.name} — {student.mark}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentMarks;
