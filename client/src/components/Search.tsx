import React, { useState, useEffect } from "react";
import "/src/css/search.css";
import "/src/css/post.css";
import AddPost from "./AddPost";

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const [clicked, setclick] = useState(false);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const searchTamplate = (
    <div className="search-input">
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="...חפש לפי מזהה יחודי של פוסט"
      ></input>
      <button
        onClick={() => {inputValue ? setclick(!clicked) : null}}
        className="input-button"
      >
        Search
      </button>
    </div>
  );

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
        setInputValue("");
      }
    }
    if (inputValue) {
      SetPost();
    }
  }, [clicked]);

  if (loading) {
    return <>{searchTamplate}</>;
  } else if (!loading) {
    return (
      <>
      
        <div className="post-list">
          {searchTamplate}
          <div className="single-post">
            {
              <AddPost
                description={post[0].description}
                writer={post[0].writer}
                imgUrl={post[0].imgUrl}
                likesCount={post[0].likesCount}
                createDate={post[0].createDate}
              />
            }
          </div>
        </div>
      </>
    );
  }
}
