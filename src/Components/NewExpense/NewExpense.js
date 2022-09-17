import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import AddExpense from './AddExpense';

function NewExpense (props)
{
    const [addNewExpense, SetAddNewExpense] = useState(true);
    const onSaveExpenseDataHamdler =(EnteredExpenseData) =>
    {
        const ExenseData ={
            ...EnteredExpenseData, 
            id : Math.random().toString()
        };
    
    props.onAddExpense(ExenseData);
        SetAddNewExpense(true);
    }
    const cancelHandler =() =>{
        SetAddNewExpense(true);
     }
 return(

    <div className="new-expense">
        {addNewExpense && <AddExpense addNewExpense = {addNewExpense} SetAddNewExpense = {SetAddNewExpense}/>}
        {!addNewExpense && <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHamdler} cancelHandler= {cancelHandler} />}
    </div>
 )
}
 export default NewExpense;