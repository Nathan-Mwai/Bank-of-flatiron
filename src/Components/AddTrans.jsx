import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const AddTrans = ({ transactions, setTransactions }) => {
    // const navigate = useNavigate();

    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: "",
    });

    const handleAdd = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        // e.preventDefault();

        fetch("https://bank-flat-iron-api.vercel.app/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((transaction) => {
                setTransactions([transaction, ...transactions]);
                setFormData({
                    date: "",
                    description: "",
                    category: "",
                    amount:"",
                });
                // navigate("/"); // Redirect after successful submission
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="form-holder">
            <h1>Add New Transaction</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={formData.date}
                        required
                        onChange={handleAdd}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={formData.description}
                        required
                        onChange={handleAdd}
                    />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <select
                        name="category"
                        id="category"
                        onChange={handleAdd}
                        value={formData.category}
                    >
                        <option value="">Select one option</option>
                        <option value="food">Food</option>
                        <option value="gift">Gift</option>
                        <option value="income">Income</option>
                        <option value="fashion">Fashion</option>
                        <option value="transportation">Transportation</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="housing">Housing</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        min="0"
                        max="9999999999"
                        value={formData.amount}
                        onChange={handleAdd}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Transaction" />
                </div>
            </form>
        </div>
    );
};

export default AddTrans;
