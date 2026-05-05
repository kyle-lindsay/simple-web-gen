//import { useState } from "react";
//import { invoke } from "@tauri-apps/api/core";
import { JSX } from "react";
import "./App.css";
import "./pages/Start"
import Start from "./pages/Start";
import Create from "./pages/Create";

let page: JSX.Element;

switch(window.location.pathname.toString()) {
  case "/start":
    page = <Start />
    break;
  
  case "/create":
    page = <Create />
    break;

  default:
    page = (
      <div>
        <h1>This feature is still under construction</h1>
        <h1><a href="/start">Return</a></h1>
      </div>
    );
}

function App() {
  console.log(window.location.pathname.toString());
  return (
    <div>
      {page}
      <footer className = "footer">© 2026 Kyle Lindsay <a href="/start">back</a></footer>
    </div>
  )
}

export default App;
