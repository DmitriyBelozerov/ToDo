import React from "react";
import Header from "./Header";
import Main from './Main';

function App() {
  const [arrTodo, setArrTodo] = React.useState([]);

  function handleAddTodo(point) {
    setArrTodo([point, ...arrTodo])
  }

  function handleDeleteCard() {
    console.log(1);
  }

  return (
    <div>
      <Header />
      <Main onAddTodo={handleAddTodo} listTodo={arrTodo} handleDeleteCard={handleDeleteCard} />
    </div>
  );
}

export default App;
