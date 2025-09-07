import { useState } from "react";
import AddPost from "./components/AddPost";
import CreateFeed from "./components/CreateFeed";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <CreateFeed />
    </>
  );
}

export default App;
