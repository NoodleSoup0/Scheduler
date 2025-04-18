import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Scheduler!</p>
        <p>
          <button onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          I'm excited for the hackathon!!!
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test hot module replacement (HMR).
        </p>
        <p>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
