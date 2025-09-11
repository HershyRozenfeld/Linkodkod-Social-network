import AddPost from "./AddPost";
import { useState, useEffect } from "react";
import type { AddPostProps } from "../types"

export default function CreateFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function postList() {
      try {
        const response = await fetch("https://linkodkod-social-network.onrender.com/db/posts.json");
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

  if (!loading) {
    const listItems = posts.map((element:AddPostProps) => {
      return (
        <div key={element.id} className="single-post">
          <AddPost
            Description={element.description}
            Writer={element.writer}
            ImgUrl={element.imgUrl}
            LikesCount={element.likesCount}
            CreateDate={element.createDate}
          />
        </div>
      );
    });
    return (
      <>
        <div className="post-list"> {listItems}</div>
      </>
    );
  }
  return (
    <>
      <h1>Loading...</h1>
    </>
  );
}
