import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import AddTrans from "./components/AddTrans";
import { useEffect, useState } from "react";
import TransDetails from "./components/TransDetails";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      
      <NavBar />
      {/* Adds a route that will be the one storing and displaying the information */}
      <Routes>
        <Route path="/" element={<Home transactions={transactions} />} />
        <Route path="/transactions/:id" element={<TransDetails />} />
        <Route
          path="/transactions/add"
          element={
            <AddTrans
              transactions={transactions}
              setTransactions={setTransactions}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
