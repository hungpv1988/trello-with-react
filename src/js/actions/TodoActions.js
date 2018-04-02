import * as types from '../constants/ActionTypes';

export function addTodo(text) {
    return{
        type: types.ADDNEW,
        text
    };
}

export function deleteTodo(id){
    console.log(id);
    return {
        type: types.DELETE,
        id
    }
}

export function editTodo(todo){
    return {
        type: types.EDIT,
        todo
    }
}