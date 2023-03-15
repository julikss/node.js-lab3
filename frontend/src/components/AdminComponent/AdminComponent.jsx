import "./AdminComponent.css";
import { NavLink } from "react-router-dom";

const AdminComponent = () => {
  return(
    <div className="admin-component">
      <div className="link-block">
        <NavLink to="/auth" className="link">
          <h4>Back to authorization</h4>
        </NavLink>
        <h3 className="info">Here you can work with catalog of books - add, delete books 
          or change information about them</h3>
      </div>
      <div className="choice-block" >
        <button className="btn-choice">Add a new book</button>
        <button className="btn-choice">Edit information</button>
        <button className="btn-choice">Delete information</button>
      </div>
    </div>
  )
}

export default AdminComponent;