import React from 'react';

export default class Item extends React.Component{
    constructor(props){
        super(props);
        var status, name = this.props;
        this.state = {status:this.props.status, name: this.props.name};
    }

    onClick(e)
    {
        var newStatus = this.state.status + 1;
        this.setState({status: newStatus});
    } 

    render(){
        var name = this.state.name;
        return(
            <li class="ui-state-default" onClick={(e) => this.onClick(e)}>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" value="true" /> {name}
                    </label>
                </div>
            </li>
        )
    }
}