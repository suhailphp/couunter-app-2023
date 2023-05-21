
// import logo from './logo.svg';
import './App.css';
import Counters from "./components/counters";

function App() {
  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use ></use></svg>
        <span className="fs-4">Simple header</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="/"  className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="/"  className="nav-link">Features</a></li>
        <li className="nav-item"><a href="/"  className="nav-link">Pricing</a></li>
        <li className="nav-item"><a href="/"  className="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="/"  className="nav-link">About</a></li>
      </ul>
    </header>
    <main className="container">
        <Counters></Counters>
      </main>
    </>
  );
}

export default App;

