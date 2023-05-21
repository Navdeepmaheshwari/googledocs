import "./App.css";
import HeaderMain from "./Components/HeaderMain";
import Textpage from "./Components/Textpage";
import Toolbar from "./Components/Toolbar";

function App() {
  return (
    <div className="App">
      {/* Google Docs Text Editor */}
      <div className="">
        <HeaderMain />
      </div>
      <Toolbar />
      {/* <Textpage /> */}
    </div>
  );
}

export default App;
