import React from 'react'

const TransDetails = ({transaction}) => {
  return (
    <div id='table-wrap'>
        <table>
            <caption>{transaction.category}</caption>
            <thead>
                <tr>
                    <td></td>
                    <th>
                        <span>Amount</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>
                        {transaction.date}
                        <span>
                            {transaction.description}
                        </span>
                    </th>
                    <td>
                        {transaction.amount}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TransDetails