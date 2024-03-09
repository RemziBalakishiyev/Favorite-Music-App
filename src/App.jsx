import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MusicForm from "./components/MusicForm";
import Navbar from "./components/Navbar";
import MucicList from "./components/MusicList";
function App() {
  const [musicItems, setMusicItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    function () {
      const getMusictItems = async function () {
        const response = await fetch("http://localhost:3000/musics");
        const resData = await response.json();
        setMusicItems(resData);
      };9
      getMusictItems();
    },
    [isLoading]
  );

  const handlingLoadData = function () {
    setIsLoading((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className='container-fluid d-flex justify-content-center align-items-center flex-column   '>
        <div>
          <button className='btn btn-primary ' onClick={handlingLoadData}>
            Load Data
          </button>
        </div>
        <div className='row d-flex justify-content-center align-items-center mt-2 w-100'>
          <MusicForm />
        </div>
        <div
          className='row d-flex justify-content-center align-items-center mt-2 '
          style={{ width: "60%" }}
        >
          <MucicList musicItems={musicItems} />
        </div>
      </div>
    </>
  );
}

export default App;
