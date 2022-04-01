import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 9.95,
      date: new Date(2022, 3, 31),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 699.98,
      date: new Date(2022, 1, 25),
    },
    {
      id: "e3",
      title: "New Screen",
      amount: 249.59,
      date: new Date(2022, 1, 2),
    },
    {
      id: "e4",
      title: "New Desk(Wooden)",
      amount: 450,
      date: new Date(2022, 1, 3),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
