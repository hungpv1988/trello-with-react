import * as types from '../constants/ActionTypes';

const initialState = [{name: 'Planing', status:'done'}, {name: 'Designing', status:'done'}, {name: 'Implementing', status:'done'}]

export default function todoAppReducer(state = initialState, action)
{
    switch(action.type)
    {
        case types.ADDNEW: console.log("ok"); return state;
        default: return state;
    }

    console.log("not ok"); 
    return state;
}