import * as types from '../constants/ActionTypes';
import {ItemStatus} from '../constants/ItemStatus';
// const initialState = [{
//     todoList : [{name: 'Planing', status:'done'}, {name: 'Designing', status:'done'}, {name: 'Implementing', status:'done'}]
// }];
const initialState = [{name: 'Planing', status: ItemStatus.Backlog}, {name: 'Designing', status:ItemStatus.InProgress}, {name: 'Implementing', status:ItemStatus.Resolved}]

export default function todoAppReducer(state = initialState, action)
{
    switch(action.type)
    {
        case types.ADDNEW: console.log("ok"); return [...state, {name: action.text, status: ItemStatus.Backlog}];break;
        case types.GETALL: console.log("get all");break;
        default: return state;
    }

    console.log("not ok"); 
    return state;
}