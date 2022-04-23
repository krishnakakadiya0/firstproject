import ExpenseItem from "./components/ExpenseItem";

function App() {
  let Expenses = [
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

  return (
    <div>
      <h1>Hello World !!</h1>
      <ExpenseItem
        title={Expenses[0].title}
        amount={Expenses[0].amount}
        date={Expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={Expenses[1].title}
        amount={Expenses[1].amount}
        date={Expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={Expenses[2].title}
        amount={Expenses[2].amount}
        date={Expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={Expenses[3].title}
        amount={Expenses[3].amount}
        date={Expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
