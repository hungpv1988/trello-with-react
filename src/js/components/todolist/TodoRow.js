import React from 'react';
import {connect,  bindActionCreators } from 'react-redux';
import * as actions from '../../actions/todoActions';
import * as utility from '../../helper/EnumUtility';
import {ItemStatus} from '../../constants/ItemStatus';
import ItemStatusList from './ItemStatusList';

class TodoRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {editmode: false};
    }

    handleNextClick(e){
        alert(1);
        this.props.onDeleteButtonClick(1);
    };

    handlePreviousClick(e){
        alert(1);
        this.props.onDeleteButtonClick(1);
    };

    handleEnableEdit(e)
    {
        this.setState({editmode: true});
    };

    handleSubmit(e)
    {
        this.setState({editmode: false});
    };

    render(){
        var todo = this.props.todo;
        return(
            <tr>
                <td>
                    {
                        this.state.editmode ? <input type="text" value={todo.name} />
                                            : <label> {todo.name}</label> 
                    }
                </td>
                <td>
                        {
                        this.state.editmode ?  <ItemStatusList value={todo.status}/>
                                            : <label> {utility.getKeyFromValue(ItemStatus, todo.status)}</label> 
                        }
                </td>
                <td>
                    {/* <button onClick={(e) => this.handlePreviousClick(e)} style={todo.status == ItemStatus.Backlog ? {display: 'none'} : {}} >Move Previous</button>
                    <button onClick={(e) => this.handleNextClick(e)} style={todo.state == ItemStatus.Close ? {display: 'none'} : {} }>Move Next</button> */}

                    {
                        this.state.editmode ?   <button onClick={ (e) => this.handleSubmit(e)}>Submit</button> 
                                            :   <button onClick={ (e) => this.handleEnableEdit(e)}>Edit</button> 
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

const mapDispatchToProps = (dispatch) => { return { onDeleteButtonClick: (id) => { dispatch(actions.deleteTodo(id)) } } }

export default connect(mapStateToProps, mapDispatchToProps)(TodoRow);