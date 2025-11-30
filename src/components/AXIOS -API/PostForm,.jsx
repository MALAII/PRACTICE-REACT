import { useState } from "react";
import axios from "axios";

function PostForm(){
    const[title, setTitle]=useState('');
    const[body, setBody]=useState('');
    const[UserId, setUserId]=useState('');
    const [responseData, setResponseData]=useState(null)
    const handlesubmit=(e)=>{
        e.preventDefault()
        let userdata= {
            "title": title,
            "body": body,
            "UserId": UserId
        }
        axios.post("https://jsonplaceholder.typicode.com/posts" , userdata)
            .then(response=>{
                console.log(response.data);
                setResponseData(response.data)
            })
            .catch(error=>{
                console.log("error while fetching" , error)
            });
        }

    

    return(
        <>
        <form onSubmit={handlesubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <label>Body</label>
            <textarea type="text" value={body} onChange={(e)=>setBody(e.target.value)}/>
            <label>UserId</label>
            <input type="number" value={UserId} onChange={(e)=>setUserId(e.target.value)}/>
            <button type="submit">Submit</button>


        </form>

        </>
    );
}
export default PostForm;