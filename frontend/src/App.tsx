import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMessage(result.message);
        },
        (error) => {
          setIsLoaded(true);
          setError('Could not fetch message');
        }
      )
  }, [])

  let content;
  if(error) {
    content = <p>{error}</p>
  } else if(!isLoaded) {
    content =  <p>Loading...</p>
  } else {
    content = <p id="message">{message}</p>
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {content}
    </div>
  )
}

export default App
