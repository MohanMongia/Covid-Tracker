import React from 'react';
import SearchBar from './SearchBar';
import CasesTable from './CasesTable';
import StateData from './StateData';
import Header from './Header';
import DataHolderList from './DataHolderList';
import TableRow from './TableRow';
import {getCovidApiDataHome} from '../utils/covidData';
import calculateTotalCases , {calculateActiveCases,calculateDeceasedCases,calculateRecoveredCases} from '../utils/casesCalculater';
import {codeToState} from '../enums/data';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import SuggestionList from './SuggestionList';



class Home extends React.Component {

    state = { result:{} , suggestions:[]}


    getStateWiseData() {
      if(this.state.result)
      {
          return Object.entries(this.state.result).map(item => {
            return (
                <TableRow key={item[0]} childKey={item[0]} value={item[1].total} createLink={true} />
            )
          });
      }
    }

    getSuggestionsToHome(suggestions) {
        this.setState({suggestions:suggestions});
    }

    componentDidMount() {
      getCovidApiDataHome.call(this);
    }

    getAllNumbers() {
        return [calculateTotalCases.call(this),calculateActiveCases.call(this),calculateRecoveredCases.call(this),calculateDeceasedCases.call(this)];
    }


    render()
    {
      return (
          <Router>
            <div className="setting">
                <Header heading="Covid Tracker" isMainHeading={true}/>
                
                <SearchBar statePlaceholder="Search Your State.." getSuggestionsToHome={this.getSuggestionsToHome.bind(this)}/>

                <SuggestionList suggestions={this.state.suggestions}/>
                
                <Route path="/" exact >
                    <Header heading="INDIA" />
                    <div> 
                        <DataHolderList  numbers={this.getAllNumbers.call(this)} />
                    </div>
                    <CasesTable heading="State" getStateWiseData={this.getStateWiseData.bind(this)} />
                </Route>

              <Route path="/state/:stateCode" exact render={(props) => {
                
                return (
                  <div>
                    
                    <Header heading={codeToState[props.match.params.stateCode]}/>
                    
                    <StateData  {...props} key={props.match.params.stateCode}/>

                  </div>
                  )
                }
              }>    

              </Route>


          </div>
        </Router>
      )
    }
}

export default Home;