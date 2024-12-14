import React from 'react';

function SearchBar({ onSearch, setUsername, username }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => onSearch(username)}>Search</button>
    </div>
  );
}

export default SearchBar;

