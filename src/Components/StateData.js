import React from 'react';
import CasesTable from './CasesTable';
import {defaultResult} from '../enums/data';
import getCovidApiData from '../utils/covidData';
import DataHolderList from './DataHolderList';
import TableRow from './TableRow';
import "./Error.css";


class StateData extends React.Component {

    state={data:{},error: ""}

    componentDidMount() {
        getCovidApiData.call(this);
    }

    getStateWiseData() {

        if(Object.keys(this.state.data).length)
        {
          return Object.entries(this.state.data.districts).map(item => {
                return (
                    <TableRow key={item[0]} childKey={item[0]} value={item[1].total} />
                )
            });
        }
        return <tr></tr>
    }

    numbersCalculate = () => {
        if(Object.keys(this.state.data).length>0)
        {
            let confirmed = this.state.data.total.confirmed || 0;
            let active = (this.state.data.total.confirmed || 0)-(this.state.data.total.deceased || 0)-(this.state.data.total.recovered || 0);
            let recovered = this.state.data.total.recovered || 0 ;
            let deceased = this.state.data.total.deceased || 0 ;

            const result = [confirmed,active,recovered,deceased];
            return result;
        }
        else
        {
            return defaultResult;
        }
    }

    render() {
        if(this.state.error.length>0)
        {
            return (
                <div className="errorParent">
                    <div className="errorDiv">
                        {this.state.error}
                    </div>
                </div>
            )
        }
        return (
            <div>
                
                <DataHolderList numbers={this.numbersCalculate()}  />

                <CasesTable heading="District" getStateWiseData={this.getStateWiseData.bind(this)} />

            </div>
        )
    }
}

export default StateData;