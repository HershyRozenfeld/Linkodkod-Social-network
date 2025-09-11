import { useState, useEffect } from "react";
import "/src/css/create.css";

export default function CreatePost() {
  const [inputValue, setInputValue] = useState("");
  const [sended, setSend] = useState(false);
  const [started, setStart] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    function FetchPost() {
      const postObject = {
        description: inputValue,
        writer: "hershy rosenfeld", // - just now,
        imgUrl: "", // - just now,
        likesCount: 0,
        createDate: new Date().toLocaleDateString(),
      };
      fetch("http://localhost:3000/api/post/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postObject),
      })
        .then((response) => response.json())
        .then((data) => console.log(data)).then(() => {setStart(false); setInputValue('')})
        .catch((error) => console.error("Error:", error));
    }
    if (sended) {
      FetchPost();
    }
  }, [sended]);

  if (!started) {
    return (
      <div className="create-input">
        <input
          className="create-input-button"
          onClick={() => {
            setStart(true);
          }}
          placeholder="...התחל פוסט חדש"
        ></input>
      </div>
    );
  } else if (started) {
    return (
      <>
        <div className="create-space">
          <textarea
            value={inputValue}
            onChange= {handleChange}
            className="create-textarea"
            placeholder="What do you want to talk about?"
          />
          <div className="post-button">
            <button onClick={() => setSend(true)}>Post</button>
          </div>
        </div>
      </>
    );
  }
}
