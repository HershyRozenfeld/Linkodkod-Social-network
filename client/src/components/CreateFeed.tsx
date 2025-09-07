import AddPost from "./AddPost";
import React, { useState, useEffect } from "react";

export default function CreateFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function postList() {
      try {
        const response = await fetch("./src/posts.json");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error loading file:", error);
      } finally {
        setLoading(false);
      }
    }
    postList();
  }, []);
  let listItems = [];
  if (!loading) {
    listItems = posts.map((element) => {
      <li>
        <AddPost
          key={element}
          title={element}
          imgUrl={element}
          likesCount={element}
          createDate={element}
        />
      </li>;
    });
    return (
      <>
        <ul className="container">{listItems}</ul>
      </>
    );
  }
  return (
    <>
      <h1>Loading...</h1>
    </>
  );
}
