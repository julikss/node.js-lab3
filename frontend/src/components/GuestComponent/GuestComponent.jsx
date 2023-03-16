import "./GuestComponent.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const GuestComponent = () => {
  const [hideInputbox, setHideInputbox] = useState(true);

  return(
    <div>
      <div className="guest-component">
      <div className="guest-block">
        <NavLink to="/auth" className="guest-link">
          <h4>Back to authorization</h4>
        </NavLink>
      </div>
      <div className="search-box" >
        <label className="btn-search" onClick={() => setHideInputbox(false)}>Search by author</label>
        <input id="myInput" type="text" className={`inputbox ${hideInputbox ? "hide-inputbox1" : ""}`} />
        <label className="btn-search" onClick={() => setHideInputbox(false)}>Search by name</label>
        <input id="myInput" type="text" className={`inputbox ${hideInputbox ? "hide-inputbox2" : ""}`} />
        <label className="btn-search" onClick={() => setHideInputbox(false)}>Search by keywords</label>
        <input id="myInput" type="text" className={`inputbox ${hideInputbox ? "hide-inputbox3" : ""}`} />
      </div>
    </div>
    </div>
    
  )
}

export default GuestComponent;
