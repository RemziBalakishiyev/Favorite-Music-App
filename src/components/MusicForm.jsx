import React, { useEffect, useState } from "react";
import "./Music.css";
function MusicForm({ onAddNewData }) {
  const [formMusic, setFormMusic] = useState({
    name: "",
    singer: "",
    point: 0,
  });

  const handlePointCount = (type) => {
    console.log("sad");
    switch (type) {
      case "increment":
        setFormMusic((prev) => ({ ...prev, point: prev.point++ }));
        break;
      case "decrement":
        setFormMusic((prev) => ({ ...prev, point: prev.point-- }));
        break;
    }
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormMusic((prev) => ({ ...prev, [name]: value }));
  };

  const addNewData = async (e) => {
    e.preventDefault();
    onAddNewData(formMusic);
  };
  console.log("a");
  return (
    <div className='card text-center p-0' style={{ width: "60%" }}>
      <div className='back-custom  card-header'>
        <h5 className='card-title'>Your Favorite Music 🎶</h5>
      </div>
      <form class='card-body row' onSubmit={addNewData}>
        <div class='mb-3 col-4'>
          <input
            type='text'
            class='form-control'
            id='music'
            placeholder='Music'
            onChange={handleChangeForm}
            name='name'
            autoComplete='off'
          />
        </div>
        <div class='mb-3 col-3'>
          <input
            type='text'
            class='form-control'
            id='singer'
            placeholder='Singer'
            onChange={handleChangeForm}
            name='singer'
          />
        </div>
        <div class='mb-3 col-3 counter-inp-form'>
          <input
            type='text'
            class='form-control'
            id='music'
            value={formMusic.point}
            placeholder='Point'
          />
          <span
            className='counter-btn'
            onClick={() => handlePointCount("increment")}
          >
            +
          </span>
          <span
            className='counter-btn'
            onClick={() => handlePointCount("decrement")}
          >
            -
          </span>
        </div>
        <div class='mb-3 col-2'>
          <button className='btn btn-danger' type='submit'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default MusicForm;
