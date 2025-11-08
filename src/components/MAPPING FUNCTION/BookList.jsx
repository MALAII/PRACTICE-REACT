// Make an array of book objects {title, author, year} and show each as a card layout.
function BookList() {
  const books = [
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "Harry Potter", author: "J.K. Rowling", year: 1997 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "Atomic Habits", author: "James Clear", year: 2018 },
  ];
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      {books.map((book, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            borderRadius: "10px",
            padding: "10px",
            width: "180px",
            textAlign: "center",
          }}
        >
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Year: {book.year}</p>
        </div>
      ))}
    </div>
  );
}
export default BookList;
