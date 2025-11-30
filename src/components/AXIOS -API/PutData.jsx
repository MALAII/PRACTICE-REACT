import axios from "axios";
import { useState } from "react";

function PutData() {
  const [updatedData, setUpdatedData] = useState(null);

  const handleUpdate = () => {
    const updatedPost = {
      title: "Irruttu Arayil Morattu Koothu"
    };

    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", updatedPost)
      .then((response) => {
        console.log(response.data);
        setUpdatedData(response.data);   // store updated response
      })
      .catch((error) => {
        console.log("Error updating:", error);
      });
  };

  return (
    <div>
      <button onClick={handleUpdate}>Update Post Title</button>

      {updatedData && (
        <div>
          <h3>Updated Post:</h3>
          <p><strong>ID:</strong> {updatedData.id}</p>
          <p><strong>Title:</strong> {updatedData.title}</p>
          <p><strong>Body:</strong> {updatedData.body}</p>
        </div>
      )}
    </div>
  );
}

export default PutData;
