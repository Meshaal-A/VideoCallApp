import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import Store from "./componenets/Store";
import Extrabanner from "./componenets/Extrabanner";
import About from "./componenets/About";
import Footer from "./componenets/Footer";
import ChatButton from "./componenets/ChatButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />;
      <Hero />;
      <Store />;
      <Extrabanner />;
      <About />;
      <Footer />;
      <ChatButton />;
    </>
  );
}

export default App;
