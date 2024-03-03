import React from "react";
import "./Music.css";
function MusicForm() {
  return (
    <div className='card text-center p-0' style={{ width: "60%" }}>
      <div className='back-custom  card-header'>
        <h5 className='card-title'>Your Favorite Music 🎶</h5>
      </div>
      <div class='card-body row'>
        <div class='mb-3 col-4'>
          <input
            type='text'
            class='form-control'
            id='music'
            placeholder='Music'
          />
        </div>
        <div class='mb-3 col-3'>
          <input
            type='text'
            class='form-control'
            id='music'
            placeholder='First name'
          />
        </div>
        <div class='mb-3 col-3'>
          <input
            type='text'
            class='form-control'
            id='music'
            placeholder='Last name'
          />
        </div>
        <div class='mb-3 col-2'>
          <a className='btn btn-danger'>♥</a>
        </div>
      </div>
    </div>
  );
}

export default MusicForm;
