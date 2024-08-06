import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Transactions from './components/TransDetails';
import AddTrans from './components/AddTrans';

function App() {

  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then(res => res.json())
    .then(transactions => setTransactions(transactions))
    .catch(err => console.log(err))
}, [])

  return (
    <div className="App">
      <NavBar />
      <Transactions />
      <AddTrans/>
      <Routes>
      <Route path='/' element={<Home transactions={transactions}/>}/> 
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
