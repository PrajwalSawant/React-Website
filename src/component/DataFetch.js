import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const DataFetch = () => {
  const [posts, setPost] = useState({});
  const [id, setId] = useState(1);
  const [buttonId, setbuttonId] = useState();

  const handleClick = () => {
    setbuttonId(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
      .then((res) => {
        console.log(`response return`, res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(`error return`, err);
      });
  }, [buttonId]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Click Me</button>
      <ul>{posts.title}</ul>

      {/* {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))} */}
    </div>
  );
};

export default DataFetch;
