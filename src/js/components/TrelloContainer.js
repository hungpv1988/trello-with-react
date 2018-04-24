import React from 'react';
import NewItem from './NewItem';
import Header from './Header';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import autoBind from 'react-autobind';
import  {ItemStatus}  from '../constants/ItemStatus';
import * as actions from '../constants/ActionTypes';

class TrelloContainer extends React.Component{
    constructor(props){
        super(props);
        autoBind(this);
    }

    render(){
        var {todoList} = this.props;
        var InProgressList = todoList.filter( (item) => item.status == ItemStatus.Backlog ),
            DoneList = todoList.filter( (item) => item.status == ItemStatus.InProgress );
        return(
            <div class="container">
                <div class="row">
                   <div class="col-md-6">
                        <div class="todolist not-done">
                            <Header title="Todo"/>
                            <NewItem />
                            <TodoList todoList={InProgressList} moveNext={this.props.moveNext}/>
                        </div>
                   </div>

                    <div class="col-md-6">
                        <div class="todolist">
                            <Header title="Done" />
                            <TodoList todoList={DoneList} moveNext={this.props.moveNext}/>
                        </div>
                   </div>
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

const mapDispatchToProps =  (dispatch) => { return { moveNext: () => {dispatch(actions.NEXTSTATUS) } }};
export default connect(mapStateToProps, mapDispatchToProps)(TrelloContainer)