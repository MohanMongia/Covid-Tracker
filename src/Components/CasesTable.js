import React from 'react';
import './CasesTable.css';
import {headings as mappers} from '../enums/data';

const CasesTable = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th>{props.heading}</th>
                    <th>{mappers["A"]}</th>
                    <th>{mappers["B"]}</th>
                    <th>{mappers["C"]}</th>
                    <th>{mappers["D"]}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.getStateWiseData()}
                </tbody>
            </table>
        </div>
    )
};

export default CasesTable;