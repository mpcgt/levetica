import reactLogo from './assets/react.svg'
import lvtcLogo from './assets/levetica.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
      <a href="https://vitejs.dev" target="_blank">
          <img src={lvtcLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Levetica + React = ❤️</h1>
      <div className="card">
        <p>
          Levetica est actuellement en construction...
        </p>
      </div>
      <p className="read-the-docs">
        Levetica dans <a href="https://github.com/mpcgt/levetica">GitHub</a>
      </p>
    </>
  )
}

export default App