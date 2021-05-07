import React from 'react';
import { Link } from 'react-router-dom';
import "./SuggestionRow.css"


const SuggestionRow = (props) => {
    console.log(props.state);
    if(props.state === undefined)
    {
        return (
            <div className="rowNoRecord">
                No State Found ..
            </div>
        )
    }
    return (
        
        <div className="row">
            <Link to={`/state/${props.state[1]}`} className="stateLink">
                <div className="alignerDiv">
                    <div className="slightPadding">
                        {props.state[0]}
                    </div>
                    <div className="slightPadding">
                        {props.state[1]}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SuggestionRow;