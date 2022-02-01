import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState();
  useEffect(setPostsCompleted, [posts]);

  function setPostsCompleted() {
    if (!posts) {
      return;
    }

    console.log("completed");
  }

  function getPosts() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }

  return (
    <div className="App">
      <button onClick={getPosts}>Get Posts</button>
      <p>num of posts : {posts?.length}</p>
    </div>
  );
}

export default App;
