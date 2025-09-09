import React, { useState, useEffect } from "react";
import "/src/css/search.css";

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const [clicked, setclick]  = useState(false);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    async function SetPost() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/post/${inputValue}`
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error loading file:", error);
      } finally {
        setLoading(false);
      }
    }
    if (clicked){
      SetPost();
    }
  }, [clicked]);
  return (
    <>
      <div className="search-input">
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="חפש לפי מזהה יחודי של פוסט"
        ></input>
        <button onClick={() => setclick(true)} className="input-button">
          Search
        </button>
      </div>
      {post}
    </>
  );
}
