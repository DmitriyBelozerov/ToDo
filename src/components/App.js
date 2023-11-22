import React from "react";
import Header from "./Header";
import Main from './Main';

import api from '../utils/api';

function App() {
  const [itemsTodo, setItemsTodo] = React.useState([]);

  React.useEffect(() => {
    api.getItemsTodo()
      .then((data) => {
        setItemsTodo(data)
      })
      .catch(err => console.log(err))
  }, [])

  function handleAddTodo(newItemTodo) {
    api.createItemTodo(newItemTodo)
    .then((data) => {
      console.log(data);
      console.log(itemsTodo);
      setItemsTodo([ ...itemsTodo, data.data])
    })
  }

  function handleDeleteCard(item) {
    api.deleteItemTodo(item._id)
    .then((data)=> {
      setItemsTodo(itemsTodo.filter(i => i._id !== item._id))
    })
    .catch(err => console.log(err))
  }

  function handleMoveElement(index) {
  }



  return (
    <div>
      <Header />
      <Main onAddTodo={handleAddTodo} listTodo={itemsTodo} handleDeleteCard={handleDeleteCard} handleMoveElement={handleMoveElement} />
    </div>
  );
}

export default App;
