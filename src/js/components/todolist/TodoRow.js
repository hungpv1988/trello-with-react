import React from 'react';
import {connect,  bindActionCreators } from 'react-redux';
import * as actions from '../../actions/todoActions';

class TodoRow extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick(e){
        alert(1);
        this.props.onDeleteButtonClick(1);
    };

    render(){
        var todo = this.props.todo;
        return(
            <tr>
                <td>{todo.name}</td>
                <td>{todo.status}</td>
                <td><button onClick={(e) => this.handleClick(e)}>delete</button></td>
            </tr>
        )

    }
}


function mapStateToProps(state) {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch) => { return { onDeleteButtonClick: (id) => { dispatch(actions.deleteTodo(id)) } } }

export default connect(mapStateToProps, mapDispatchToProps)(TodoRow);