function Main() {
    return (
        <>
            <div className='main'>
                <form className="form">
                    <input className="form__input"></input>
                    <button className="form__button">Сохранить</button>
                </form>
            </div>
            <sectino>
                <ul>
                    {toDoItem.map(i=><Point/>)}
                </ul>
            </sectino>
        </>
    );
}

export default Main;
