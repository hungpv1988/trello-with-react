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
            allColumns = [...allColumns, <TodoList todoList={todoList.filter( (item) => item.status == ItemStatus[key])} cssClass="col-md-3" title={key} moveNext={this.props.moveNext} />]
        }

        return(
            <div class="container">
                <div class="row">
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

const mapDispatchToProps =  (dispatch) => { return { moveNext: (todo) => {dispatch(actions.nextStatus(todo)) } }};
export default connect(mapStateToProps, mapDispatchToProps)(TrelloContainer)