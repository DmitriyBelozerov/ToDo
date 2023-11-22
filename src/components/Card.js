import React from "react";

function Card(props) {
    const [number, setNumber] = React.useState(props.number);

    // React.useEffect(() => {
    //     setNumber(number + 1)
    // }, [])

    function deleteItem() {
        props.handleDeleteCard(props.item)
    }

    function moveElement() {
        props.handleMoveElement(props.index)
    }

    return (
        <li className="card">
            <div className="card__number">{number}.</div>
            <p className="card__name">{props.item.name}</p>
            <button type="button" className="card__priority" onClick={moveElement}></button>
            <button type="button" className="card__delete" onClick={deleteItem}></button>
        </li>
    );
}

export default Card; 