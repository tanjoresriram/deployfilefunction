import React from 'react';
import logo from './logo.svg';
import './App.css';
 import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <button onClick={fetchFile}> Download file </button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function fetchFile() {
  axios({
        url: `https://github.com/tanjoresriram/contentps/blob/main/myps.ps1`,
        method: "GET",
         responseType: "blob" // important
    }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
            "download",
            `myps.ps1`
        );
        document.body.appendChild(link);
        link.click();

        // Clean up and remove the link
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    });
  throw new Error('Function not implemented.');
}

export default App;
