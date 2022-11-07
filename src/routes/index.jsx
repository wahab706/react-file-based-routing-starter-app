import React, { useState } from 'react';
import reactLogo from '../assets/react.svg';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <div className='flex justify-center' >

        <Link to='/reactPage'>
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </Link>
        <Link to='/vitePage'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
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
      <Link to={`/collection/${'path'}`}>collection</Link>
      <br />
      <Link to={`/products/${'path'}`}>products</Link>
      <br />
      <Link to={`/products/orders/${'path'}`}>product Orders</Link>
    </div>
  )
}
