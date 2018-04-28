import React from 'react';
import { height } from 'window-size';

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
        var name = this.state.name,
            style = (!name) ?   'style ={height: 60px} contenteditable="true"' : "";
        return(
            <li class="ui-state-default" {...style} onClick={(e) => this.onClick(e)}>
               {name}
            </li>
        )
    }
}