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
      return(
      <>
      <div className="single-post">
        <AddPost
              key={element.id}
              description={element.description}
              writer={element.writer}
              imgUrl={element.imgUrl}
              likesCount={element.likesCount}
              createDate={element.createDate}
            />
      </div>
      </>)
    });
    return (
      <>
        <div className="post-list">       {listItems}
        </div>
      </>
    );
  }
  return (
    <>
      <h1>Loading...</h1>
    </>
  );
}
