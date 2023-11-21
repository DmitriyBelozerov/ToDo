import React from "react";
import Header from "./Header";
import Main from './Main';

function App() {
  const [arrTodo, setArrTodo] = React.useState([]);

  function handleAddTodo(point) {
    setArrTodo([point, ...arrTodo])
  }

  function handleDeleteCard(item) {
    setArrTodo(arrTodo.filter(i => { return i !== item }
    ))
  }

  function handleMoveElement(index) {
    const newList = [...arrTodo];
    newList.splice(index -1, 2, arrTodo[index], arrTodo[index - 1]);
    setArrTodo(newList)
  }



  return (
    <div>
      <Header />
      <Main onAddTodo={handleAddTodo} listTodo={arrTodo} handleDeleteCard={handleDeleteCard} handleMoveElement={handleMoveElement} />
    </div>
  );
}

export default App;
