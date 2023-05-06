import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Display } from "./components/mainDisplay/Display";
import { Keyboard } from "./components/keyboard/Keyboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Display />
      <Keyboard />
    </div>
  );
}

export default App;
