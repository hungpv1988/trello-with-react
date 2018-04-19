import * as types from  '../constants/ActionTypes';

const initialState = {criteria: null}

export default function filterReducer(state = null, action)
{
    switch(action.type){
        case types.SEARCH:
            return action.criteria;
            //return state;

        default: return state;   
    }
}