import React, { useEffect, useState } from 'react';
import AddTrans from './AddTrans';
import TransDetails from './TransDetails';

const Home = () => {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/transactions")
            .then(res => res.json())
            .then(transactions => setTransactions(transactions))
            .catch(err => console.log(err));
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteringTransactions = transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const disTrans = filteringTransactions.map(transaction => (
        <TransDetails key={transaction.id} transaction={transaction} setTransactions={setTransactions} />
    ));

    return (
        <div>
            <AddTrans />
            <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={handleSearch}
            />
            {disTrans}
        </div>
    );
};

export default Home;
