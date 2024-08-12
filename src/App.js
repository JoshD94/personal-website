import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Info from "./components/Info";

function App() {
  const [openFile, setOpenFile] = useState("");
  function openFileFunction(title) {
    document.getElementById("info-div").scrollTo(0, 0);
    if (openFile === "") {
      document.getElementById("header").classList.toggle("transition");
      setOpenFile(title);
      document.getElementById("info-div").classList.toggle("hidden");
    } else {
      if (title === openFile) {
        document.getElementById("header").classList.toggle("transition");
        document.getElementById("info-div").classList.toggle("hidden");
        setTimeout(() => {
          setOpenFile("");
        }, 500);
      } else {
        document.getElementById("info-div").classList.toggle("hidden");
        setOpenFile(title);
        document.getElementById("info-div").classList.toggle("hidden");
      }
    }
  }
  return (
    <div id="app">
      <Header openFileFunction={openFileFunction} />
      <div>
        <Info title={openFile} />
      </div>
    </div>
  );
}

export default App;
