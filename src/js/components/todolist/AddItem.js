import React from 'react';
import * as actions from '../../actions/TodoActions';
import {connect} from 'react-redux';

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {itemName: ''};
    }

    onAddButtonClicked(event){
        event.preventDefault();
        this.props.addTodo(this.state.itemName);
        this.setState({
            itemName: ''
        })
    };

    handleChange(event)
    {
        this.setState({itemName: event.target.value});
    };

    render(){
        return(
            <div align="center">
                <table>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" width="90px" value={this.state.itemName} onChange={(e) => this.handleChange(e)} /> </td>
                    </tr>

                    <tr>
                        <td colSpan="2"><button onClick={(e) => this.onAddButtonClicked(e)}>Add</button></td>
                    </tr>
                 </table>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => { return { addTodo: (text) => { dispatch(actions.addTodo(text)) } } }
export default connect(null, mapDispatchToProps)(AddItem);
