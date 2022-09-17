import ExpenseItem from "./ExpenseItem";
import './ExpenseContent.css';
function ExpenseContent (props) {
    if(props.filteredExpense.length === 0)
    {
        return (
            <h2 className="expenses-list__fallback">
             No Expenses Found.
            </h2>
        )
    }
return(
   <ul className="expenses-list">
     {props.filteredExpense.length>0 &&
    props.filteredExpense.map(  
            (expense, index)  =>{
                return  (<ExpenseItem key = {expense.id} date ={expense.date} title = {expense.title} ammount = {expense.ammount}/>)
            })
    }
   </ul>
)
}
export default ExpenseContent;