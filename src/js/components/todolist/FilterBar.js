import React from 'react';
import ItemStatusList from './ItemStatusList';
import {connect} from 'react-redux';
import * as actions from '../../actions/TodoActions';

class FilterBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:'', status: 0};
    }

    onNameChange(e)
    {
        this.setState(...this.state, {name: e.target.value});
    }

    onStatusChange(e)
    {
        this.setState(...this.state, {status: e.nativeEvent.srcElement.value});
    }

    onFilter(e)
    {
        var {name, status} = this.state;
        this.props.filter({name, status});
    }

    render(){
        return(
            <div align="center">
                <fieldset>
                    <legend>Data</legend>
                    <input type="text" width="270px" onChange={(e) => this.onNameChange(e)}/>
                    <ItemStatusList onChange={(e) => this.onStatusChange(e)} defaultOptionText="select item status" defaultOptionValue="0"/>
                    <button onClick={(e) => this.onFilter(e)}>Fiilter</button>
                </fieldset>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>  {return {filter: (name, status) => {dispatch(actions.filter({name,status})) }}};

export default connect(null,  mapDispatchToProps)(FilterBar);