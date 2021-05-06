import {stateToCode} from '../enums/data';

export default function getSuggestions(text) {
    const sanitizedData = text.trim().toLowerCase();
    const result =  Object.entries(stateToCode).filter(state => {
        let sanitizedState = state[0].trim().toLowerCase().substring(0,sanitizedData.length);
        if(sanitizedData === sanitizedState)
        {   
            return state;
        }
    });

    return result;
}