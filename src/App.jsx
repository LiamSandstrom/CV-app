import Preview from "./components/preview";
import Form from "./components/form";
import { data } from "./components/Data";
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
