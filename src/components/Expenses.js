import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        expenseTitle={props.expenses[0].title}
        expenseAmount={props.expenses[0].amount}
        expenseDate={props.expenses[0].date}
      />
      <ExpenseItem
        expenseTitle={props.expenses[1].title}
        expenseAmount={props.expenses[1].amount}
        expenseDate={props.expenses[1].date}
      />
      <ExpenseItem
        expenseTitle={props.expenses[2].title}
        expenseAmount={props.expenses[2].amount}
        expenseDate={props.expenses[2].date}
      />
    </div>
  );
}

export default Expenses;
