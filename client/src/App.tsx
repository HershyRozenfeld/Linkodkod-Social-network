import Layout from "./components/Layout";
import CreateFeed from "./components/CreateFeed";

function App() {
  return (
    <>
    <Layout content={<CreateFeed/>}/>
    </>
  );
}

export default App;
