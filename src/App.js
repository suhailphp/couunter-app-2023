
// import logo from './logo.svg';
import './App.css';
import Counters from "./components/counters";
import Header from './components/header';

function App() {
  return (
    <>
    <Header></Header>
    <main className="container">
        <Counters></Counters>
      </main>
    </>
  );
}

export default App;

