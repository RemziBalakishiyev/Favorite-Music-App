import React, { useEffect, useState } from "react";
import MusicItem from "./MusicItem";
function MusicList({ musics }) {
  return (
    <ul className='list-group'>
      {musics.map((music) => (
        <MusicItem
          name={music.name}
          singer={music.singer}
          point={music.point}
        />
      ))}
    </ul>
  );
}

export default MusicList;
