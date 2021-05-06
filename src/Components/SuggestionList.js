import React from 'react';
import SuggestionRow from './SuggestionRow';
import "./SuggestionList.css";

class SuggestionList extends React.Component {

    createSuggestionRow() {
        return this.props.suggestions.map(state => {
            return <SuggestionRow key={state[1]} state={state} />
        });
    }

    render() {
        return (
            <div className="suggestionDiv">
                <div>
                    {this.createSuggestionRow.call(this)}
                </div>
            </div>
        )
    }
}

export default SuggestionList;