import React from 'react';
import NewItem from './NewItem';
import Header from './Header';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import autoBind from 'react-autobind';
import  {ItemStatus}  from '../constants/ItemStatus';
import * as actions from '../actions/TodoActions';

class TrelloContainer extends React.Component{
    constructor(props){
        super(props);
        autoBind(this);
    }

    render(){
        var {todoList} = this.props;

        var allColumns = [];    
        for(var key in ItemStatus){
            allColumns = [...allColumns, <TodoList status={ItemStatus[key]} editTodo={this.props.editTodo} addNew={this.props.addNew} todoList={todoList.filter( (item) => item.status == ItemStatus[key])} cssClass="col-md-3" title={key} moveNext={this.props.moveNext} />]
        }

        return(
            <div class="ui">
            	<nav class="navbar app">App bar</nav>
	            <nav class="navbar board">Board bar</nav>
                <div class="lists">
                    {
                        allColumns
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        todoList: state.todoList
    }
}

const mapDispatchToProps =  (dispatch) => { return { 
    moveNext: (todo) => {dispatch(actions.nextStatus(todo))},
    addNew: (name, status) => {dispatch(actions.addTodo(name, status))},
    editTodo: (id, name, status) => { dispatch(actions.editTodo(id, text, status)) } 
    } 
};
export default connect(mapStateToProps, mapDispatchToProps)(TrelloContainer)