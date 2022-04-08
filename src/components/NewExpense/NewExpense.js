import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const [isEditing, setIsEditing] = useState(false);

  const starEditingHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
      {!isEditing && (
        <button onClick={starEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
