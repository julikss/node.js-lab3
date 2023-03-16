import "./AdminComponent.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminComponent = () => {
  const [visibilityForm, setVisibilityForm] = useState("hidden");
  const [visibilityBooks, setVisibilityBooks] = useState("hidden");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [keywords, setKeywords] = useState("");
  const [items, setItems] = useState([]);

  const showForm = (option) => {
    console.log(option)
    if (option === "add") {
      if (visibilityForm === "hidden") {
        setVisibilityBooks("hidden");
        setVisibilityForm("visible");
      } else setVisibilityForm("hidden");
    } else if (option === "all") {
      getBooksList();
      if (visibilityBooks === "hidden") {
        setVisibilityForm("hidden");
        setVisibilityBooks("visible");
      } else setVisibilityBooks("hidden");
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, keywords };
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

  const getBooksList = async () => {
    let response = await fetch("http://localhost:8000/books/allbooks")
    .then(res => res.json());

    let arrayOfBooks = [];
    for (const el of response) {
        arrayOfBooks.push({
        id: el.id,
        title: el.title.value,
        author: el.author.value,
        keywords: el.keywords.value
      })
    }

    createBooksForm(arrayOfBooks);
  }

  const editBook = async (item, newKeywords) => {
    item.keywords = newKeywords;

    let response = await fetch(`http://localhost:8000/books/edit/${item.id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(item)
    })

    console.log(response)
  }

  const createBooksForm = (arr) => {
    const arrOfItems = arr.map(item => {
      const { id, title, author, keywords } = item;
      let newKeywords = "";
      return (
        <li key={id} className="item-book">
            <div className="title-section"><b>Title:</b> {title}</div>
            <div className="title-section"><b>Author:</b> {author}</div>
            <div className="title-section"><b>Keywords</b>: {keywords}</div>
            <input name="newKeywords"
                   type="text"
                   placeholder={keywords}
                   onChange={e => newKeywords = e.target.value} 
                   className="input-edit"/>
            <input type="submit" 
                   value="Edit"
                   onClick={() => editBook(item, newKeywords)}
                   className="change-btn" />
        </li>
    )
    })

    setItems(arrOfItems);
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
        <button className="btn-choice" onClick={() => showForm("add")}>Add a new book</button>
        <button className="btn-choice" onClick={() => showForm("all")}>Edit information</button>
        <button className="btn-choice">Delete information</button>

        <form style={{visibility:`${visibilityForm}`}} 
              className="add-form"
              onSubmit={onSubmit}>
        <label>
          Enter the title:
          <input name="title"
                 type="text" 
                 placeholder="Animal Farm"
                 value={title}
                 onChange={e => setTitle(e.target.value)}
                 className="input-field"/>
        </label>
        <label>
          Enter the author: 
          <input name="author"
                 type="text"
                 placeholder="George Orwell"
                 value={author}
                 onChange={e => setAuthor(e.target.value)} 
                 className="input-field"/>
        </label>
        <label>
          Enter the keywords: 
          <input name="keywords"
                 type="text"  
                 placeholder="novella, satire, political, rebellion"
                 value={keywords}
                 onChange={e => setKeywords(e.target.value)}
                 className="input-field"/>
        </label>
        <input type="submit" 
               value="Add to the catalog" 
               className="btn-form"/>
      </form>
      <div className="allbooks" style={{visibility:`${visibilityBooks}`}} >
        <h4 className="allbooks-title">List of books</h4>
        {items}
      </div>
      </div>
      
    </div>
  )
}

export default AdminComponent;