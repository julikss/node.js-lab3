import "./GuestComponent.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchedList from "./SearchedList";

const GuestComponent = () => {
  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [keyword, setKeyword] = useState('');
  const [byAuthor, setByAuthor] = useState([]);
  const [byTitle, setByTitle] = useState([]);
  const [byKeyword, setByKeyword] = useState([]);

  const getBooks = async () => {
    let response = await fetch("http://localhost:8000/books/allbooks")
    .then(res => res.json());
    setBooks(response);
  }
  useEffect(() => {
    getBooks();
  }, []);

  const searchByAuthor = () => {
    let foundByAuthor = books.filter(el => el.author.value == author);
    if(foundByAuthor) setByAuthor(foundByAuthor);
    else setByAuthor('');
  }

  const searchByTitle = () => {
    let foundByTitle = books.filter(el => el.title.value == title);
    if(foundByTitle) setByTitle(foundByTitle);
    else setByTitle('');
  }

  const searchByKeyword = () => {
    let foundByKeyword = [];

    for(let el of books) {
      el.keywords.forEach(element => {
        if(element.value == keyword) foundByKeyword.push(el);
    });
    }
    if(foundByKeyword.length > 0) setByKeyword(foundByKeyword);
    else setByKeyword([])
  }

  return(
    <div>
      <div className="guest-component">
      <div className="link-block">
        <NavLink to="/auth" className="link">
          <h4>Back to authorization</h4>
        </NavLink>
      </div>
      <div className="choice-block" >
        <label className="btn-choice">Search by author</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" className="inputbox" />
        <button onClick={() => searchByAuthor()}>Search</button>
        {byAuthor && <SearchedList list={byAuthor}/>}

        <label className="btn-choice">Search by name</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="inputbox" />
        <button onClick={() => searchByTitle()}>Search</button>
        {byTitle && <SearchedList list={byTitle}/>}

        <label className="btn-choice">Search by keywords</label>
        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" className="inputbox" />
        <button onClick={() => searchByKeyword()}>Search</button>
        {byKeyword && <SearchedList list={byKeyword}/>}

      </div>
    </div>
    </div>
  )
}

export default GuestComponent;