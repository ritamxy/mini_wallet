import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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
    date: new Date(2021, 1, 25),
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
    date: new Date(2021, 1, 3),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
