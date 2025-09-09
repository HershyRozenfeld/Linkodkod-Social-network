import React, { useState } from 'react';
import '/src/css/search.css';
import SetPostById from './SetPostById';

export default function Search() {

  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="search-input">
        <input className="input"
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder="חפש לפי מזהה יחודי של פוסט"></input>
        <button onClick={() =><SetPostById postId={inputValue} />}    className='input-button'>Search</button>
      </div>
    </>
  );
}
