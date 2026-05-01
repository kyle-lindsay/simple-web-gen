//import { useState } from "react";
//import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  return (
    <div>
      <main className="container">
        <h1>Simple<span className= "col-accent">Web</span>Gen</h1>

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
