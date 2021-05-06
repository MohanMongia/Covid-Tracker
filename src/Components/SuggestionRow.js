import React from 'react';
import { Link } from 'react-router-dom';
import "./SuggestionRow.css"


const SuggestionRow = (props) => {
    return (
        <div>
            <Link to={`/state/${props.state[1]}`} className="stateLink">
                {props.state[0]} : {props.state[1]}
            </Link>
        </div>
    )
}

export default SuggestionRow;