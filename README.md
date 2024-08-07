
# FlatIron Bank

## Overview

This project is a simple React application for managing transactions. It allows users to add new transactions, view details of existing transactions, and search for transactions based on their description(Though I will be trying global search).
## Features

- **Add New Transactions:** Users can add transactions by providing details such as date, description, category, and amount.
- **View Transactions:** Transactions are displayed in a table format with category, date, description, and amount.
- **Search Transactions:** Users can search transactions by description using a search bar.


## Usage/Examples
In the AddTrans component
```jsx
<AddTrans transactions={transactions} setTransactions={setTransactions} />
}
```
 From the TransDetails:
 ```jsx
 <TransDetails transaction={transaction} />
 ```
 The Home component render **AddTrans** and **TransDetails**
 ```jsx
 <Home />
 ```


## Installation

- **Clone the repository** :
```bash
git@github.com:Nathan-Mwai/Bank-of-flatiron.git
```
- **Install Dependencies** :
```bash
npm install
```
- **Run The Server** :
```node
json-server --watch src/db.json
```
- **Run The Application** :
```bash
npm start
```

    
## API Reference

#### Get all items

```http
  GET /transactions
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. No API Key used |

#### Get item

```http
  GET /transactions/${id}
```
When you search for a Description
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. No id since I used to fetch I used an empty array |



## Deployment

To deploy this project makes sure you have:

```bash
react: ^18.0.0
react-dom: ^18.0.0
react-scripts: ^4.0.3
```
Deploy

## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://nathan-mwai.github.io/portfolio_1/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nathan-mwaniki-a9a28a2a5/)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/mwaniki_na)

