import React from 'react';
import TodoListTable from './TodoListTable';
import AddItem from './AddItem';
import {connect} from 'react-redux';
import * as actions from '../../actions/todoActions';
import autoBind from 'react-autobind';
import FilterBar from './FilterBar';

class MyApp extends React.Component{
    constructor(){
        super();
        autoBind(this);
    }

    componentDidMount()
    {
        this.props.getAll();
    }

    render(){
        return(
            <div>
                <AddItem/>
                <FilterBar/>
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

// must have a return here. Talk with Gile tomorrow
const mapDispatchToProps = (dispatch) => { return { getAll: () => { dispatch(actions.getAll()) } } }
export default connect(mapStateToProps, mapDispatchToProps) (MyApp);