import "./AdminComponent.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const AdminComponent = () => {
  const [visibility, setVisibility] = useState("hidden");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [keywords, setKeywords] = useState("");

  const showBooksForm = () => {
    if (visibility === "hidden") setVisibility("visible");
    else setVisibility("hidden");
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    if (name === "title") setTitle(value);
    else if (name === "author") setAuthor(value);
    else setKeywords(value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, keywords };
    console.log(book);
    addBook(book);
  }

  const addBook = async (book) => {
    let response = await fetch("http://localhost:8000/books/add", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(book)
    })
  }

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
        <button className="btn-choice" onClick={showBooksForm}>Add a new book</button>
        <button className="btn-choice">Edit information</button>
        <button className="btn-choice">Delete information</button>

        <form style={{visibility:`${visibility}`}} 
              className="add-form"
              onSubmit={onSubmit}>
        <label>
          Enter the title:
          <input name="title"
                 type="text" 
                 placeholder="Animal Farm"
                 value={title}
                 onChange={handleChange}
                 className="input-field"/>
        </label>
        <label>
          Enter the author: 
          <input name="author"
                 type="text"
                 placeholder="George Orwell"
                 value={author}
                 onChange={handleChange} 
                 className="input-field"/>
        </label>
        <label>
          Enter the keywords: 
          <input name="keywords"
                 type="text"  
                 placeholder="novella, satire, political, rebellion"
                 value={keywords}
                 onChange={handleChange}
                 className="input-field"/>
        </label>
        <input type="submit" 
               value="Add to the catalog" 
               className="btn-form"/>
      </form>
      </div>
      
    </div>
  )
}

export default AdminComponent;