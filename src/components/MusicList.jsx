import React, { useEffect, useState } from "react";
import MusicItem from "./MusicItem";
function MusicList() {
  const [musics, setMusic] = useState([]);
  useEffect(() => {
    const getMusicItems = async () => {
      const response = await fetch("http://localhost:3000/musics");
      const data = await response.json();
      setMusic(data);
    };
    getMusicItems();
  }, []);
  console.log(musics);
  return (
    <ul className='list-group'>
      {musics.map((music) => (
        <MusicItem name={music.name} fullName={music.fullName} />
      ))}
    </ul>
  );
}

export default MusicList;
