import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 9.95,
      date: new Date(2022, 3, 31),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 699.98,
      date: new Date(2022, 1, 25),
    },
    {
      id: "e3",
      title: "New Screen",
      amount: 249.59,
      date: new Date(2022, 1, 2),
    },
    {
      id: "e4",
      title: "New Desk(Wooden)",
      amount: 450,
      date: new Date(2022, 1, 3),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
