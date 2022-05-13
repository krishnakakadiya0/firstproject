import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

let dummyExpenses = [
  {
    id: 'e1',
    title: "Some Books",
    amount: 200.00,
    date: new Date(2022, 3, 22),
  },
  {
    id: 'e2',
    title: "New Cloths",
    amount: 1000.00,
    date: new Date(2019, 1, 17),
  },
  {
    id: 'e3',
    title: "Keyboard Cover",
    amount: 50.00,
    date: new Date(2022, 3, 19),
  },
  {
    id: 'e4',
    title: "Phone Case",
    amount: 100.00,
    date: new Date(2020, 3, 19),
  },
];

const App = () => {

  const[expenses, setExpenses] = useState(dummyExpenses);

  const newExpense = (newExpenseData) =>{
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onNewExpense = {newExpense}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
