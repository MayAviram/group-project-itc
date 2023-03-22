import React, { useRef } from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const typeInputRef = useRef();
  // const priceInputRef = useRef();
  const languageInputRef = useRef();
  const locationInputRef = useRef();

  const typeList = ["guitarra", "piano", "guitara"];
  const languageList = ["english", "hebrew", "spanish"];
  const locationList = [
    "tel-aviv",
    "jerusalem",
    "bat-yam",
    "heifa",
    "ramat-gan",
    "eilat",
  ];

  const searchTeacher = (e) => {
    e.preventDefault();
    const filter = {
      type: typeInputRef.current.value,
      // price: priceInputRef.current.value,
      language: languageInputRef.current.value,
      location: locationInputRef.current.value,
    };
    // console.log("filter", filter);
  };
  return (
    <div className="searchBarContainer">
      <h2>Search Your Teacher</h2>
      <form className="searchBarForm">
        <div className="inputDiv">
          <label htmlFor="searchInputType">I want to learn</label>
          <input
            type="text"
            id="searchInputType"
            ref={typeInputRef}
            list="typeList"
          />
          <datalist id="typeList">
            {typeList.map((item) => {
              return <option value={`${item}`} />;
            })}
          </datalist>
        </div>
        {/* <div className="inputDiv">
          <label htmlFor="searchInputPrice">Price Per Hour</label>
          <input type="text" id="searchInputPrice" ref={priceInputRef}/>
        </div> */}
        <div className="inputDiv">
          <label htmlFor="searchInputLanguage">Language</label>
          <input
            type="text"
            id="searchInputLanguage"
            ref={languageInputRef}
            list="languageList"
          />

          <datalist id="languageList">
            {languageList.map((item) => {
              return <option value={`${item}`} />;
            })}
          </datalist>
        </div>
        <div className="inputDiv">
          <label htmlFor="searchInputLocation">Location</label>
          <input
            type="text"
            id="searchInputLocation"
            ref={locationInputRef}
            list="locationList"
          />

          <datalist id="locationList">
            {locationList.map((item) => {
              return <option value={`${item}`} />;
            })}
          </datalist>
        </div>
        <button onClick={searchTeacher}>Search</button>
      </form>
    </div>
  );
}
