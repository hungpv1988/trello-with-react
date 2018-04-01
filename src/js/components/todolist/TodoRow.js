import React from 'react';
import { bindActionCreators } from 'redux';

export default class TodoRow extends React.Component{
    constructor(){
        super();
    }

    handleClick(){
        this.props.actions.editTodo(this.props.todo);
    };

    render(){
        var todo = this.props.todo;
        return(
            <tr>
                <td>{todo.name}</td>
                <td>{todo.status}</td>
                <td><button onClick={this.handleClick}>delete</button></td>
            </tr>
        )

    }
}

