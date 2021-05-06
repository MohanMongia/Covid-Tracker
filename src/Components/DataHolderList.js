import React from 'react';
import DataHolder from './DataHolder';
import './DataHolderList.css'

import {headings as mappers} from '../enums/data';

const DataHolderList = ({numbers}) => {
    return (
        <div className="casesData">
            <DataHolder heading={mappers["A"]} number={numbers[0]} />
            <DataHolder heading={mappers["B"]} number={numbers[1]}/>
            <DataHolder heading={mappers["C"]} number={numbers[2]} />
            <DataHolder heading={mappers["D"]} number={numbers[3]} />
        </div>
    )
}

export default DataHolderList;