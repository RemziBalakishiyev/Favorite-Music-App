import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MusicForm from "./components/MusicForm";
import Navbar from "./components/Navbar";
import MucicList from "./components/MusicList";
import api from "./api/api";
function App() {
  const [error, setError] = useState(null);
  const [musics, setMusic] = useState([]);

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
  // Get data when the component is first rendered
  useEffect(() => {
    const getMusicItems = async () => {
      try {
        const response = await api.get();
        if (!response.ok) {
          throw new Error("Could not load music data.");
        }
        const data = await response.json();
        setMusic(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching music data:", error);
        setError("Error fetching music data. Please try again later."); // Set error message
      }
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
          {error ? (
            <div className='alert alert-danger' role='alert'>
              {error}
            </div>
          ) : (
            <MusicList musics={musics} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
