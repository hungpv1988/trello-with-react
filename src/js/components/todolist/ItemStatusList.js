import React from 'react';
import {ItemStatus} from '../../constants/ItemStatus';
import PropTypes from 'prop-types';

export default class ItemStatusList extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {value: props.value};
    }

    // onChange(event)
    // {
    //     this.setState({value: event.srcElement.value});
    // };

    render(){
        var options = [],
            value = this.state.value,
            onChange = this.props.onChange;

        for(var key in ItemStatus){
            options =[...options, <option value={ItemStatus[key]} selected={ItemStatus[key] == value}   >{key}</option>];
        }
        return(
            <select onChange={(e) => onChange(e)}>
                {                                                   
                 options
                }
            </select>
        )

    }
}

ItemStatusList.propTypes = 
{
    onChange: PropTypes.func.isRequired
}