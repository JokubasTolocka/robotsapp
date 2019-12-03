import {CHANGE_SEARCH_FIELD} from './constants.js';

const initialState = {
    searchField: '',
}
//this is a reducer, were setting the arguments, and default arguments if no argument are provided
export const searchRobots = (state=initialState, action={}) => {
    //action.type from actions file
    switch(action.type) {
        //
        case CHANGE_SEARCH_FIELD:
            // returning a new state, thats going to have everything in the state with action.payload (whatever the user has entered)
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}