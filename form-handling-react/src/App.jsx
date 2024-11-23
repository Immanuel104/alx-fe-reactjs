import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

const App = () => {
  const [useFormik, setUseFormik] = useState(false);

  return (
    <div>
      <h1>User Registration</h1>
      <button onClick={() => setUseFormik(!useFormik)}>
        Switch to {useFormik ? "Controlled Components" : "Formik"}
      </button>
      {useFormik ? <FormikForm /> : <RegistrationForm />}
    </div>
  );
};

export default App;import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<div>
      <h1>User Registration</h1>
      <RegistrationForm />
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