import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExistedExpenses = async () => {
      const response = await fetch(
        "https://mini-wallet-23d6b-default-rtdb.firebaseio.com/current_expenses.json"
      );
      const responseData = await response.json();
      const loadedExpenses = [];

      for (const key in responseData) {
        //destructing amount, date, title from responseData[key]
        const { amount, date, title } = responseData[key];
        loadedExpenses.push({
          id: key,
          title: title,
          amount: amount,
          // Convert date from string to Date type
          date: new Date(date),
        });
      }
      setExpenses(loadedExpenses);
    };

    fetchExistedExpenses();
  }, []);

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
};

export default App;
