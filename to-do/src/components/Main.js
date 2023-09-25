import React from "react";

import Card from "./Card";

function Main(props) {
const [todoValue, setTodoValue] = React.useState('');

function handleChangeValue (e) {
    setTodoValue(e.target.value);
}

function handeSubmit (e) {
    e.preventDefault();
    setTodoValue('');
    props.onAddTodo(
        todoValue
    )
}

    return (
        <>
            <div className='main'>
                <form className="form" onSubmit={handeSubmit} noValidate>
                    <input className="form__input" onChange={handleChangeValue} value={todoValue}></input>
                    <button className="form__button"  type="submit">Сохранить</button>
                </form>
            </div>
            <section>
                <ul>
                    {props.listTodo.map((item, index) =>
                        <Card item = {item} key={index}/>
                    )}
                </ul>
            </section>
        </>
    );
}

export default Main;
