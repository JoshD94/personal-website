import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="footer">
        Joshua Dirga 2024
        <br></br>
        This website was heavily inspired by{" "}
        <img
          src={require("./images/vscode.png")}
          className="vscode"
          alt="VS Code"
        ></img>
        VS Code
      </div>
    </div>
  );
}

export default App;
