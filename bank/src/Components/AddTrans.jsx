import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const AddTrans = ({ transactions, setTransactions }) => {
  // Add a useNavigate that can change  when an update is made

//   const nav = useNavigate();

  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleAdd = (e) => {
    const description = e.target.description;
    const value = e.target.value;

    // calling setFormData updates the value of the formData which is what is inside the the curly braces in the useState
    setFormData({
      ...formData,
      [description]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Remember to update the URL
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((transaction) => setTransactions([transaction, ...transactions]))
      .catch((err) => console.log(err));

    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });

    // nav("/");
    // I'll call navigate from here
  };
  return (
    <div className="form-holder">
      {/* When someone wants to add a transaction they should do it from here */}
      <>
        <h1>Add New Transaction</h1>
      </>
      <form onSubmit={handleSubmit}>
        <>
          <input
            type="date"
            name="date"
            placeholder="Enter Date"
            value={formData.date}
            required
            onChange={handleAdd}
          />
        </>
        <>
          <input
            type="text"
            name="description"
            placeholder="Enter description"
            value={formData.description}
            required
            onChange={handleAdd}
          />
        </>
        <>
          {/* This is for the categories */}
          <select name="category" id="category" onChange={handleAdd} value={formData.category}>
            {/* Update select */}
            <option>Select one option</option>
            <option value="food">
                Food
            </option>
            <option value="Gift">Gift</option>
            <option value="income">Income</option>
            <option value="fashion">Fashion</option>
            <option value="transportation">Transportation</option>
            <option value="entertainment">Entertainment</option>
            <option value="housing">Housing</option>
          </select>
        </>
        <>
          <input
            type="number"
            min={0.0}
            max={9999999999}
            name="date"
            placeholder="Enter Amount"
            value={formData.amount}
            onChange={handleAdd}
          />
        </>
        <>
          <input type="submit" />
        </>
      </form>
      {/* If I have time I should be able to add an update button  */}
    </div>
  );
};

export default AddTrans;