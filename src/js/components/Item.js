import React from 'react';

export default class Item extends React.Component{
    constructor(props){
        super(props);
        var status, name = this.props;
        this.state = {id: this.props.id, name: this.props.name, status:this.props.status};
    }

    onClick(e)
    {
        var newStatus = this.state.status + 1;
        this.setState({status: newStatus});
        var todo = {id: this.state.id, name: this.state.name, status: newStatus};
        this.props.moveNext(todo);
        
    } 

    componentWillReceiveProps(nextProps) {
        if  (!nextProps.id || !nextProps.name || !nextProps.status){
            return;
          }
    
         this.setState({id: nextProps.id, name: nextProps.name, status:nextProps.status});
    };

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