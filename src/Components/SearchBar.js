import React from 'react';
import getSuggestions from '../utils/suggestionFinder';
import './SearchBar.css';


class SearchBar extends React.Component{

    state = { textInput : ""}

    searchBarParent = React.createRef();

    onChangeHandler = (e) => {
        const val = e.target.value;
        this.setState({textInput:val});
        if(val.length>0)
        {
            const result = getSuggestions(e.target.value);
            this.props.getSuggestionsToHome(result,val);
            console.log(this.searchBarParent.current);
            this.searchBarParent.current.classList.add("removeMarginBottom")

        }
        else
        {
            this.searchBarParent.current.classList.remove("removeMarginBottom")
            this.props.getSuggestionsToHome([],val);
        }
    }

    render()
    {
        return (
            <div ref={this.searchBarParent} className="centered addMargin">
                <div className="inputContainer">
                    <input className="searchBar" type='text' val={this.state.textInput}  onChange={this.onChangeHandler.bind(this)} placeholder={this.props.statePlaceholder} />
                    <div className="iconContainer">
                        <box-icon name='search'></box-icon>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;