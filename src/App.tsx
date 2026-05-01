import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div>
      <main className="container">
        <h1>SimpleWebGen</h1>

        <p className="description">SimpleWebGen is a lightweight, easy to use website generator perfect for creating responsive static web pages. Create good looking websites with no previous experience just by defining your content and pressing generate.</p>

        <div className="select-mode">
          <button>Create New</button>
          <button>Upload</button>
        </div>
      </main>
      <footer className = "footer">© Kyle Lindsay 2026</footer>
    </div>
  );
}

export default App;
