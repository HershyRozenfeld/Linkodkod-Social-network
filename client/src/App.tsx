import { useState } from "react";
import Layout from "./components/Layout";
import CreateFeed from "./components/CreateFeed";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Layout content={<CreateFeed/>}/>
    </>
  );
}

export default App;
