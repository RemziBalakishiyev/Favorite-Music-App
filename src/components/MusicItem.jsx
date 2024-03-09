import React from "react";
import "./Music.css";
function MusicItem({ name, singer, point }) {
  return (
    <li className=' back-custom list-group-item card-header-custom mt-2 '>
      <img src='' alt='' />
      <div className='d-flex w-100 justify-content-between'>
        <h5 className='mb-1'>{singer}</h5>
      </div>
      <p className='mb-1 h6'>{name}</p>
      <div className='d-flex w-100 justify-content-between'>
        <small className='h2'>{point}</small>
        <div>
          <a className='btn btn-success '>♥</a>
        </div>
      </div>
    </li>
  );
}

export default MusicItem;
