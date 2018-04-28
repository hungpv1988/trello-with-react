import * as types from '../constants/ActionTypes';

export function addTodo(text, status) {
    return{
        type: types.ADDNEW,
        text,
        status
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

export function getAll(){
    return {
        type: types.GETALL
    }
}

export function filter(criteria){
    return{
        type:types.SEARCH,
        criteria
    }
}

export function nextStatus(todo){
    return{
        type:types.NEXTSTATUS,
        todo
    }
}