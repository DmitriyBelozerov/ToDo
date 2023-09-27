
function Card(props) {
    return (
        <li className="card">
            <p className="card__name">            {props.item}           </p>
            <button type="button" className="card__priority">
            </button>
            <button type="button" className="card__delete" onClick={props.handleDeleteCard}></button>
        </li>
    );
}

export default Card; 