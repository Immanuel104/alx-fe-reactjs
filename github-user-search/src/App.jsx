import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchUserData } from './services/githubService';
import './App.css';import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { fetchUserData } from './services/githubService';import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState('');
   const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Handle search function
  const handleSearch = async (username) => {
    setLoading(true); // Start loading
    setError(null); // Reset previous errors
    setUserData(null); // Reset previous user data

    const data = await fetchUserData(username);

    if (data) {
      setUserData(data);
    } else {
      setError("Looks like we can't find the user.");
    }

    setLoading(false); // End loading
  };

  const handleSearch = async (username) => {
    const data = await fetchUserData(username);
    setUserData(data);
  };

  return (<div className="App">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {userData && !loading && !error && (
        <div className="user-card">
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
        </div>
      )}
    </div>
         <div className="App">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} setUsername={setUsername} username={username} />
      {userData && <UserCard user={userData} />}
    </div>
     
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
