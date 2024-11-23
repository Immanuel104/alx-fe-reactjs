import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile/Profile';
import Login from './components/Login'; // A simple login pageimport BlogPost from './components/BlogPost';import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import ProfileDetails from './components/Profile/ProfileDetails';
import ProfileSettings from './components/Profile/ProfileSettings';import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
      const isAuthenticated = false; // Change to true to simulate login
    const isAuthenticated = false; // Simulate auth state

  return (<Router>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                {/* Protected Route */}
                <Route
                    path="/profile/*"
                    element={
                        <ProtectedRoute isAuth={isAuthenticated}>
                            <Profile />
                        </ProtectedRoute>
              <Router>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/blog/:postId" element={<BlogPost />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </Router>
        <Router>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                {/* Nested Routes */}
                <Route path="/profile" element={<Profile />}>
                    <Route path="details" element={<ProfileDetails />} />
                    <Route path="settings" element={<ProfileSettings />} />
                </Route>
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </Router>
            <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/*" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

const Home = () => <h1>Home Page</h1>;
const NotFound = () => <h1>404 Not Found</h1>;
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
