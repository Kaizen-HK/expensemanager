import React, { useState } from "react";
import './ExpenseForm.css';
function ExpenseForm (props){
    const [title, setTitle] = useState(""); 
    const [ammount, SetAmmount]  = useState(0);
    const [date, SetDate] = useState();
    // const intialExpenseObj = {}
    // const [expenseObj, SetExpenseObj] =  useState({
    //     title : '', 
    //     ammount : 0, 
    //     date : ''
    // });
    const titleChnageHandler =(event)=>{
        setTitle(event.target.value);
        //  SetExpenseObj({
        //     ...expenseObj, 
        //     title : event.target.value
        //     })
        // SetExpenseObj((prevState)=>{
        //    return {...prevState, title : event.target.value}
        // });
    }
    const ammountChangeHandler =(event) =>{
        SetAmmount(event.target.value);
        // SetExpenseObj({
        //     ...expenseObj, 
        //     ammount : event.target.value
        //     })
            // SetExpenseObj((prevState)=>{
            //     return {...prevState, ammount : event.target.value}
            //  });
    }

      const dateChangeHandler =(event) =>{
        SetDate(event.target.value);
        // SetExpenseObj({
        //     ...expenseObj, 
        //     date : event.target.value
        //     })
            // SetExpenseObj((prevState)=>{
            //     return {...prevState, date : event.target.value}
            //  });
    }
 
     const submitHandler = (event) =>
     {
        event.preventDefault();
        const expenseData ={
            title : title, 
            ammount : +ammount, 
            date : new Date(date)
        };
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setTitle('');
        SetAmmount('');
        SetDate('');
     }
    
    
    return(
        <form onSubmit={submitHandler}>
            <div className = "new-expense__controls">
                <div className = "new-expense__control">
                <label>Title</label>
                <input type='text' value={title} onChange={titleChnageHandler}/>
                </div>
                <div  className = "new-expense__control">
                <label>Ammount</label>
                <input type='number' min = '0.01' step='0.01' value={ammount} onChange={ammountChangeHandler}/>
                </div>
                <div className = "new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max ='2023-01-01' value={date} onChange={dateChangeHandler}/>
                </div>
            </div>
                <div className = "new-expense__actions">
                <button type = 'button' onClick ={props.cancelHandler} >Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )

}
export default ExpenseForm;