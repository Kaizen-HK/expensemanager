import './ExpenseFilter.css';
function ExpenseFilter (props){
   
    const yearHandler =(event)=>{
     props.onFilter(event.target.value);
    }
   return(
    <div className ='expenses-filter'>
        <div className='expenses-filter__control'>
        <label>Filter By Year</label>
        <select value={props.selectedYear} onChange={yearHandler}>
        <option value={-1}>Select</option>
        <option value={2020}>2020</option>
        <option value={2021}>2021</option>
        <option value={2022}>2022</option>
        <option value={2023}>2023</option>
        <option value={2024}>2024</option>
       </select>
    </div>
    </div>
   )
}
export default ExpenseFilter;