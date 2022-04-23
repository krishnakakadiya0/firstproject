import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  let expenses = [
    {
      title: "Some Books",
      amount: 200.00,
      date: new Date(2022, 3, 22),
    },
    {
      title: "New Cloths",
      amount: 1000.00,
      date: new Date(2022, 1, 17),
    },
    {
      title: "Keyboard Cover",
      amount: 50.00,
      date: new Date(2022, 3, 19),
    },
    {
      title: "Phone Case",
      amount: 100.00,
      date: new Date(2022, 3, 19),
    },
  ];

  // return ( 
  //   React.createElement(
  //     'div',
  //     {},
  //     React.createElement(Expenses, {items:expenses})
  //   )
  // );

  return (
    <div>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
