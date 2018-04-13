import React from 'react';
import {connect,  bindActionCreators } from 'react-redux';
import * as actions from '../../actions/todoActions';
import * as utility from '../../helper/EnumUtility';
import {ItemStatus} from '../../constants/ItemStatus';
import ItemStatusList from './ItemStatusList';

class TodoRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {editmode: false, todo: this.props.todo};
    }

    onEdit(e)
    {
        this.setState({editmode: true});
    };

    onSubmit(e)
    {
        var todo = this.state.todo;
        this.props.editTodo(todo);
        this.setState({editmode: false, todo: todo});
    };

    onNameChange(e)
    {
        var todo = this.state.todo;
        todo.name = event.target.value;
        this.setState({todo: todo});
    };

    onStatusChange(e)
    {
        var todo = this.state.todo;
        todo.status = event.srcElement.value;
        this.setState({todo: todo});
    }

    render(){
        var todo = this.state.todo;
        return(
            <tr>
                <td>
                    {
                        this.state.editmode ? <input type="text" value={todo.name} onChange={(e) => this.onNameChange(e)}  />
                                            : <label> {todo.name}</label> 
                    }
                </td>
                <td>
                        {
                        this.state.editmode ?  <ItemStatusList value={todo.status} onChange={(e) => this.onStatusChange(e)}/>
                                            : <label> {utility.getKeyFromValue(ItemStatus, todo.status)}</label> 
                        }
                </td>
                <td>
                    {/* <button onClick={(e) => this.handlePreviousClick(e)} style={todo.status == ItemStatus.Backlog ? {display: 'none'} : {}} >Move Previous</button>
                    <button onClick={(e) => this.handleNextClick(e)} style={todo.state == ItemStatus.Close ? {display: 'none'} : {} }>Move Next</button> */}

                    {
                        this.state.editmode ?   <button onClick={ (e) => this.onSubmit(e)}>Submit</button> 
                                            :   <button onClick={ (e) => this.onEdit(e)}>Edit</button> 
                    }
                  
                </td>
            </tr>
        )

    }
}


function mapStateToProps(state) {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch) => {return {editTodo: (todo) => {dispatch(actions.editTodo(todo))}}}
export default connect(mapStateToProps, mapDispatchToProps)(TodoRow);