function AddExpense (props) {
  const onclickHandler =(event) =>{
    props.SetAddNewExpense(false);
  }
    return (
        <div>
            <button onClick={onclickHandler}>Add New Expense</button>
        </div>
    )
}
export default AddExpense;