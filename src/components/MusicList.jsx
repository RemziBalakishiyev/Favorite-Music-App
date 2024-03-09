import React, { useEffect, useState } from "react";
import MusicItem from "./MusicItem";
function MusicList({ musicItems }) {
  return (
    <ul className='list-group'>
      {musicItems.map((item) => (
        <MusicItem name={item.name} singer={item.singer} point={item.point} />
      ))}
    </ul>
  );
}

export default MusicList;
