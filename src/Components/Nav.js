import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div className="nav">
            <div className="nav-header">
          <div className="nav-title">Date Night Generator</div></div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/random">Random Date Picker</Link>
              <Link to="/myDateNight">My Date Nights</Link>
           </ul>
        </div>
  );

}