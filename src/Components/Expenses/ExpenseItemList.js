import React , {useState} from 'react';
import Card from '../UI/Card';
import ExpenseContent from './ExpenseContent';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css'
import ExpenseChart from './ExpenseChart';
function ExpenseItemList(props){
    const [selectedYear, SetSelectedYear] = useState("")
    console.log(props.Expenses);
    if(props.Expenses === null)
    {
        return;
    }
    const selectedYearHandler =(selectedYear) =>{
        SetSelectedYear(selectedYear);
    }
    const filteredExpense = props.Expenses.filter((expense) =>{
       return (expense.date.getFullYear().toString() === selectedYear);
    })
   
return(
     
    <Card className='expenses'>
       <ExpenseFilter selectedYear = {selectedYear} onFilter ={selectedYearHandler}/> 
       <ExpenseChart  filteredExpense ={filteredExpense}/>
       <ExpenseContent filteredExpense = {filteredExpense}/>
    </Card>
)
}
export default ExpenseItemList;