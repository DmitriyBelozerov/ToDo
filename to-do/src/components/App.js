import React from "react";
import Header from "./Header";
import Main from './Main';

function App() {
  const [arrTodo, setArrTodo] = React.useState([]);

  function handleAddTodo (point) {
    setArrTodo([point, ...arrTodo])
  }
  
  return (
    <div>
      <Header />
      <Main onAddTodo={handleAddTodo} listTodo = {arrTodo}/>
    </div>
  );
}

export default App;
