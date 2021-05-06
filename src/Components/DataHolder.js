import React from 'react';
import formatter from "../utils/formatNumber";

import './DataHolder.css';

const DataHolder = (props) => {
    return (
        <div className="block">
            <div>
                <div className="marg-bottom">
                    {props.heading}
                </div>
                <div className="marg-bottom">
                    <span className="number">{formatter(props.number)}</span>
                </div>
            </div>
        </div>
    )
}

export default DataHolder;