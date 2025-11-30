import axios from "axios";
import { useState } from "react";

function DeletePost() {
  const [message, setMessage] = useState("");

  const handleDelete = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1")
      .then(() => {
        setMessage("Post deleted successfully");
      })
      .catch((error) => {
        console.log("Error deleting:", error);
      });
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Post</button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default DeletePost;
