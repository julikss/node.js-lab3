
const SearchedList = ({list}) => {
 return(
  <div className="obj-block">
    {list.map(el => {
      return(
        <div className="obj">
          <p>Title: {el.title.value}</p>
          <p>Author: {el.author.value}</p>
          <p>Keywords: {el.keywords.map(el => el.value + ' ')}</p>
        </div>
      )
    })}
  </div>
 )
}

export default SearchedList;