import "./GuestComponent.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const GuestComponent = () => {
  const [hideInputbox, setHideInputbox] = useState(true);
  return(
    <div>
      <div className="guest-component">
      <div className="link-block">
        <NavLink to="/auth" className="link">
          <h4>Back to authorization</h4>
        </NavLink>
      </div>
      <div className="choice-block" >
        <label className="btn-choice" onClick={() => setHideInputbox(false)}>Search by author</label>
        <input id="myInput" type="text" className={`inputbox ${hideInputbox ? "hide-inputbox1" : ""}`} />
        <label className="btn-choice" onClick={() => setHideInputbox(false)}>Search by name</label>
        <input id="myInput" type="text" className={`inputbox ${hideInputbox ? "hide-inputbox2" : ""}`} />
        <label className="btn-choice" onClick={() => setHideInputbox(false)}>Search by keywords</label>
        <input id="myInput" type="text" className={`inputbox ${hideInputbox ? "hide-inputbox3" : ""}`} />
      </div>
    </div>
    </div>
  )
}

export default GuestComponent;
