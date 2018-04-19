import * as types from '../constants/ActionTypes';
import {ItemStatus} from '../constants/ItemStatus';
// const initialState = [{
//     todoList : [{name: 'Planing', status:'done'}, {name: 'Designing', status:'done'}, {name: 'Implementing', status:'done'}]
// }];
const initialState = [{id: 1, name: 'Planing', status: ItemStatus.Backlog}, {id: 2, name: 'Designing', status:ItemStatus.InProgress}, {id: 3, name: 'Implementing', status:ItemStatus.Resolved}]

export default function todoAppReducer(state = initialState, action)
{
    switch(action.type)
    {
        case types.ADDNEW: 
            var nextId = state[state.length-1].id+1;
            return [...state, {id: state[state.length-1].id+1, name: action.text, status: ItemStatus.Backlog}];

        case types.EDIT:
            return state.map((item, index) => (item.id == action.todo.id) ? {...item, name:action.todo.name, status:action.todo.status} : item )

        default: return state;
    }

    console.log("not ok"); 
    return state;
}