import * as types from '../constants/ActionTypes';

const initialState = [{
    todoList : [{name: 'Planing', status:'done'}, {name: 'Designing', status:'done'}, {name: 'Implementing', status:'done'}]
}];

export default function todoAppReducer(state = initialState, action)
{
    switch(action.type)
    {
        case types.ADDNEW: console.log("ok"); return !state.is_addnew;
        default: return state;
    }

    console.log("not ok"); 
    return state;
}