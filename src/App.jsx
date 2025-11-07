import Preview from "./components/Preview.jsx";
import Form from "./components/Form.jsx";
import { data } from "./components/Data.js";
import "./styles/App.css";
import { useState } from "react";

function App() {
  const [appData, setAppData] = useState(data);

  function setData(newData) {
    console.log(newData);
    setAppData(newData);
  }

  return (
    <>
      <Form data={appData} setData={setData} />
      <Preview data={appData} setData={setData} />
    </>
  );
}

export default App;
