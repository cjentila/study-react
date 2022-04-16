import Expenses from "./components/Expenses";

function App() {
  const expensesData = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Health Insurance",
      amount: 1000,
      date: new Date(2021, 1, 31),
    },
    {
      id: "e3",
      title: "Life Insurance",
      amount: 500,
      date: new Date(2021, 3, 31),
    },
  ];

  return <Expenses expenses={expensesData} />;
}

export default App;
