import { useState, useEffect } from "react";
import "../css/search.css";
import "../css/post.css";
import AddPost from "./AddPost";
import type { AddPostProps } from "../types"

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const [clicked, setclick] = useState(false);
  const [post, setPost] = useState<AddPostProps[]>([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const searchTamplate = (
    <div className="search-input">
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="חפש לפי מזהה ייחודי של פוסט... (לדוגמא 1, 2, 3)"
      ></input>
      <button
        onClick={() => {
          inputValue ? setclick(!clicked) : null;
        }}
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
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading file:", error);
      } finally {
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
                Description={post[0].description}
                Writer={post[0].writer}
                ImgUrl={post[0].imgUrl}
                LikesCount={post[0].likesCount}
                CreateDate={post[0].createDate}
              />
            }
          </div>
        </div>
      </>
    );
  }
}
