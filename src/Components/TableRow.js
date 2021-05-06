import React from 'react';
import { Link } from 'react-router-dom';
import {codeToState} from '../enums/data';
import formatter from '../utils/formatNumber';
import './TableRow.css';

const TableRow = ({childKey : key,value,createLink}) => {
    const confirmed = (value.confirmed) || 0;
    const recovered = value.recovered || 0;
    const active = (value.confirmed || 0)-(value.deceased || 0)-(value.recovered || 0);
    const deceased = value.deceased || 0;
    return (
        <tr key={key}>
            <td >
                {
                    createLink ? <Link to={`/state/${key}`}><span className="normalize">{codeToState[key] || "Other"}</span></Link>  : <span>{key}</span>
                }
            </td>
            <td>
                {formatter(confirmed)}
            </td>
            <td>
                { formatter(active)}
            </td>
            <td>
                {formatter(recovered)}
            </td>
            <td>
                {formatter(deceased) }
            </td>
        </tr>
    )
}

export default TableRow;