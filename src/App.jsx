import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MusicForm from "./components/MusicForm";
import Navbar from "./components/Navbar";
import MucicList from "./components/MusicList";
function App() {


  return (
    <>
      <Navbar />
      <div className='container-fluid d-flex justify-content-center align-items-center flex-column   '>
        <div className='row d-flex justify-content-center align-items-center mt-2 w-100'>
          <MusicForm />
        </div>
        <div
          className='row d-flex justify-content-center align-items-center mt-2 '
          style={{ width: "60%" }}
        >
          <MucicList />
        </div>
      </div>
    </>
  );
}

export default App;
