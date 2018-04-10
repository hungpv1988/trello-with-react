import React from 'react';
import TodoListTable from './TodoListTable';
import AddItem from './AddItem';
import {connect} from 'react-redux';
import * as actions from '../../actions/todoActions';
import autoBind from 'react-autobind';

class MyApp extends React.Component{
    constructor(){
        super();
        autoBind(this);
    }

    componentDidCatch()
    {
        this.props.getAll();
    }

    render(){
        alert(this.props.todoList);
        return(
            <div>
                <AddItem/>
                <TodoListTable todoList={this.props.todoList}/>
            </div>   
        )
    }
} 

function mapStateToProps(state) {
    return {
        todoList: state.todoList
    };
}

const mapDispatchToProps = (dispatch) => { getAll: () => { dispatch(actions.getAll()) } }
export default connect(mapStateToProps, mapDispatchToProps) (MyApp);