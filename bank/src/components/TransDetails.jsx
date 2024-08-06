import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TransDetails = () => {
    // Since code is dynamic I'll use state hooks
    const[transaction, setTransaction] = useState({})

    //Remember to add a params
    //Use params returns object containing the routes dynamic parameters
    const {category} = useParams()


    // Since code needs data from a server I'll have to use the useEffect hook


    useEffect(() => {
        // Update the fetch method to be the template
        fetch(`http://localhost:3000/transactions`)
        .then(res => res.json)
        .then(transaction => setTransaction(transaction))
        .catch(error => console.log(error)
        )
    },[category])

  return (
    // Information from above will be passed down here
    <div>
        <table>
            <caption>{transaction?.category}</caption>
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
                        {transaction?.date}
                        <span>
                            {transaction?.description}
                        </span>
                    </th>
                    <td>
                        {transaction?.amount}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TransDetails