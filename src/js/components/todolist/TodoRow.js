import React from 'react';
import {connect,  bindActionCreators } from 'react-redux';
import * as actions from '../../actions/todoActions';

export default class TodoRow extends React.Component{
    constructor(){
        super();
    }

    handleClick(){
        alert(1);
        this.props.onDeleteButtonClick(1);
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


// const bridgeTodoRow = connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(TodoRow)