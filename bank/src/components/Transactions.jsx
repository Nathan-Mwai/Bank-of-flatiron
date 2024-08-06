import React from 'react'

const Transactions = ({transaction}) => {
  return (
    <div>
        <div key={transaction.id}>
        <h2> Date:{transaction.date}</h2>
        <p> Description: {transaction.description}</p>
        </div>
    </div>
  )
}

export default Transactions