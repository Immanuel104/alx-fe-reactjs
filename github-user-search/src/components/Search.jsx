import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    onSearch(username); // Trigger search with the username
  };

  return ("fetchUserData""avatar_url", "login", "Loading", "Looks like we cant find the user", "img"
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

