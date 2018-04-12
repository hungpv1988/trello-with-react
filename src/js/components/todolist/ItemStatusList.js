import React from 'react';
import {ItemStatus} from '../../constants/ItemStatus';

export default class ItemStatusList extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        var options = [];
        var value = this.props.value;

        for(var key in ItemStatus){
            options =[...options, <option value={ItemStatus[key]} selected={ItemStatus[key] == value}   >{key}</option>];
        }
        return(
            <select>
                {                                                   
                 options
                }
            </select>
        )

    }
}