import React from 'react';
import SuggestionRow from './SuggestionRow';
import "./SuggestionList.css";

class SuggestionList extends React.Component {

    createSuggestionRow() {
        if(this.props.suggestionsRecieved)
        {
            if(this.props.suggestions.length > 0)
            {
                return this.props.suggestions.map(state => {
                    return <SuggestionRow key={state[1]} state={state} />
                });
            }
            else
            {
                return <SuggestionRow key="No Record"/>
            }
        }
    }

    render() {
        return (
            <div className="suggestionDiv">
                <div className="greyBorder rowWidth">
                    {this.createSuggestionRow.call(this)}
                </div>
            </div>
        )
    }
}

export default SuggestionList;