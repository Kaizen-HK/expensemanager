import { useState } from "react";
import ExpenseItemList from "./Components/Expenses/ExpenseItemList";
import NewExpense from "./Components/NewExpense/NewExpense";
const Initial_Expense =[
  {
    id : 'e1', 
    title : 'Toilet Paper', 
    ammount : 25.95, 
    date : new Date (2020, 7, 14),
  }, 
  {
    id : 'e2', 
    title : 'Car Insurance', 
    ammount : 250.95, 
    date : new Date (2020, 8, 14),
  }, 
  {
    id : 'e3', 
    title : 'Amazon Prime', 
    ammount : 200.95, 
    date : new Date (2020, 9, 14),
  }, 
  {
    id : 'e4', 
    title : 'Netflix', 
    ammount : 15.09, 
    date : new Date (2020, 11, 14),
  }

];
function App() {
  const [Expenses, SetExpenses] = useState(Initial_Expense);
  const AddExpenseHandler = (expense) =>{
    SetExpenses((prevState)=>{
      return [expense, ...prevState];
    });
  }
  return (
  <div>
    <div className=""><h2 style={{textAlign :"center"}}>Expense Mangement App</h2></div>
    <NewExpense onAddExpense = {AddExpenseHandler}/>
    <ExpenseItemList Expenses ={Expenses}/>
  </div>
  );
}

export default App;
