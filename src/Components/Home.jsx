import React, { useEffect, useState } from 'react';
import AddTrans from './AddTrans';
import TransDetails from './TransDetails';

const Home = () => {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("https://bank-flat-iron-api.vercel.app/transactions")
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
            <h1>FlatIron Bank</h1>
            <p>Welcome to FlatIron Bank, where banking meets excitement! At FlatIron Bank, we’re all about blending tradition with a modern twist to make your financial journey as vibrant and dynamic as you are. Whether you're aiming to grow your savings, dive into smart investments, or enjoy seamless digital banking, we’ve got you covered with a dash of flair and a lot of enthusiasm. With a legacy of trust and a future full of innovation, FlatIron Bank is here to make your financial experience not just secure, but downright exhilarating!</p>
            <AddTrans />
            <h3>Search Transactions</h3>
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
