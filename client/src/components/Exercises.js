//Import required packages
import React from 'react';

//Exercise Component
const Exercises = () => {
  return (
    <div className="main">
      <h2 className="headings">Exercises</h2>

      <form className="search-form">
        <input type="text" placeholder="Search"></input>
        <button>Search</button>
      </form>
    </div>
  );
};

//Export Exercise Component
export default Exercises;