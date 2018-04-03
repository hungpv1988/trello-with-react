import React from 'react';
import TodoListTable from './TodoListTable';


export default class MyApp extends React.Component{
    constructor(){
        super();
        this.state = {
            todoList : [{name: 'Planing', status:'done'}, {name: 'Designing', status:'done'}, {name: 'Implementing', status:'done'}]
        }
    }

    render(){
        var todoList = this.state.todoList;
        return(
           <TodoListTable todoList={todoList}/>
        )
    }
} 

