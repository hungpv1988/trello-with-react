import * as types from '../constants/ActionTypes';

// const initialState = [{
//     todoList : [{name: 'Planing', status:'done'}, {name: 'Designing', status:'done'}, {name: 'Implementing', status:'done'}]
// }];
const initialState = [{name: 'Planing', status:'In Progress'}, {name: 'Designing', status:'Backlog'}, {name: 'Implementing', status:'Backlog'}]

export default function todoAppReducer(state = initialState, action)
{
    switch(action.type)
    {
        case types.ADDNEW: console.log("ok"); return [...state, {name: action.text, status: 'Backlog'}];break;
        case types.GETALL: console.log("get all");break;
        default: return state;
    }

    console.log("not ok"); 
    return state;
}