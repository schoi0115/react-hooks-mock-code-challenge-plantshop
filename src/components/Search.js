import React, {useState} from "react";

function Search({onSearch}) {
  const [search, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onSearch(search)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <form onChange ={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </form>
    </div>
  );
}

export default Search;
