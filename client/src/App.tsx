import { useState } from "react";
import "./App.css";
import AddPost from "./components/AddPost";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AddPost />
    </>
  );
}

export default App;
