import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form onSubmit={handleSearch} className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => handleInputChange(e, setUsername)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => handleInputChange(e, setLocation)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => handleInputChange(e, setMinRepos)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
        Search
      </button>
    </form>
  );
}

export default SearchBar;

