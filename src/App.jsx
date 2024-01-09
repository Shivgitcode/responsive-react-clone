import "./App.css";
import Hero from "../src/components/Hero/Hero";
import About from "./components/About/About";
import { useContext } from "react";
import { AppProvider } from "./context/AppProvider";
import Questions from "./components/Questions/Questions";

function App() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Questions></Questions>
    </div>
  );
}

export default App;
