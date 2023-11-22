import React from "react";
import Header from "./Header";
import Main from './Main';

import api from '../utils/api';

function App() {
  const [arrTodo, setArrTodo] = React.useState([]);
  const [itemsTodo, setItemsTodo] = React.useState([]);

  React.useEffect(() => {
    api.getItemsTodo()
      .then((data) => {
        setItemsTodo(data)
      })
      .catch(err => console.log(err))
  }, [])

  function handleAddTodo(point) {
    setArrTodo([point, ...arrTodo])
  }

  function handleDeleteCard(item) {
    api.deleteItemTodo(item._id)
    .then((data)=> {
      setItemsTodo(itemsTodo.filter(i => i._id !== item._id))
    })
    .catch(err => console.log(err))
  }

  function handleMoveElement(index) {
    const newList = [...arrTodo];
    newList.splice(index - 1, 2, arrTodo[index], arrTodo[index - 1]);
    setArrTodo(newList)
  }



  return (
    <div>
      <Header />
      <Main onAddTodo={handleAddTodo} listTodo={itemsTodo} handleDeleteCard={handleDeleteCard} handleMoveElement={handleMoveElement} />
    </div>
  );
}

export default App;
