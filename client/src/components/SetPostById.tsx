import React, { useState, useEffect } from "react";

export default function SetPostById(props: any) {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function SetPost() {
      try {
        const response = await fetch(`http://localhost:3000/search?post=${props.postId}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error loading file:", error);
      } finally {
        setLoading(false);
      }
    }
    SetPost();
  }, []);
  if (!loading) {
    return (
        <div className="searched-post"> {post}</div>
    );
  }
  return (
    <>
      <h1>Loading...</h1>
    </>
  );
}
