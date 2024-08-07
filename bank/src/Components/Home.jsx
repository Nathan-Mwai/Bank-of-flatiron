import React, { useEffect, useState } from 'react'
import AddTrans from './AddTrans'
import TransDetails from './TransDetails'

const Home = () => {
    const [transactions, setTransactions] = useState([])
    
    useEffect(() => {
      fetch("http://localhost:3000/transactions")
      .then(res => res.json())
      .then(transactions => setTransactions(transactions))
      .catch(err => console.log(err))
  }, [])


    const disTrans = transactions.map(transaction => <TransDetails key={transaction.id} transaction={transaction} setTransactions={setTransactions}/>) 
  return (
    <div>
        {disTrans}
        <AddTrans/>
    </div>
  )
}

export default Home