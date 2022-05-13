import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = ({onNewExpense}) => {
    const [isEditing, setIsEditing] = useState(false);

    const expenseDataHandler = (expenseData) => {
        const newExpenseData = {
            ...expenseData,
            id : Math.random().toString()
        }
        onNewExpense(newExpenseData);
        setIsEditing(false);
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    return(
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm onNewExpenseData = {expenseDataHandler} onCancel={stopEditingHandler}/>
            )}
        </div>
    );
};

export default NewExpense;