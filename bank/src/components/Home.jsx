import React from "react";
import Transactions from "./Transactions";

const Home = ({transactions, setTransactions}) => {

    const disTrans = transactions.map(transaction => <Transactions key={transaction.id} transaction={transaction} setTransactions={setTransactions}/>)

  return (
    <>
      <h3>
        Dive into a new era of finance with Flatiron Bank, where cutting-edge
        tech meets personal touch. Experience banking that’s smart, sleek, and
        designed just for you. Join us and see how we’re transforming your
        financial world with a burst of innovation and flair!
      </h3>
      <>
      {/* One should see transactions and there should be an input where someone can see button to search for transaction */}
      </>
    </>
  );
};

export default Home;
