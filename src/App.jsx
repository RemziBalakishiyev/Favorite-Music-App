import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MusicForm from "./components/MusicForm";
import Navbar from "./components/Navbar";
import MucicList from "./components/MusicList";
function App() {
  const [error, setError] = useState("");

  const addData = async (musicData) => {
    const response = await fetch("http://localhost:3000/musics", {
      body: JSON.stringify(formMusic),
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responseData = await response.json();
  };

  const [musics, setMusic] = useState([]);
  useEffect(() => {
    const getMusicItems = async () => {
      const response = await fetch("http://localhost:3000/musics");
      const data = await response.json();
      setMusic(data);
    };
    getMusicItems();
  }, []);

  return (
    <>
      <Navbar />
      <div className='container-fluid d-flex justify-content-center align-items-center flex-column   '>
        <div className='row d-flex justify-content-center align-items-center mt-2 w-100'>
          <MusicForm onAddNewData={addData} />
        </div>
        <div
          className='row d-flex justify-content-center align-items-center mt-2 '
          style={{ width: "60%" }}
        >
          <MucicList musics={musics} />
        </div>
      </div>
    </>
  );
}

export default App;
