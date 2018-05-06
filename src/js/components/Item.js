import React from 'react';
import { height } from 'window-size';

export default class Item extends React.Component{
    constructor(props){
        super(props);
        var status, name = this.props;
        this.state = {id: this.props.id, name: this.props.name, status:this.props.status};
        this.li = null;
        this.setLiRef = element => {
            this.li = element;
        };

        this.focusLi = () => {
            if (this.li) this.li.focus();
        };
    };

    dispatchUpdateAction(event){
        this.props.onItemUpdate({id: this.state.id, name: event.target.innerText, status: this.state.status});
    }

    onClick(e)
    {
        if (!this.state.name){
            return;
        };

        var newStatus = this.state.status + 1;
        this.setState({status: newStatus});
        var todo = {id: this.state.id, name: this.state.name, status: newStatus};
        this.props.moveNext(todo);      
    } 

    onKeyPress(e)
    {
        if (e.key === 'Enter') 
        {
            this.dispatchUpdateAction(event);
        }
    };

    onBlur(e){
        this.dispatchUpdateAction(event);
    };

    componentDidMount(){
        this.focusLi();
    };

    componentWillReceiveProps(nextProps) {
        if  (!nextProps.id || !nextProps.name || !nextProps.status){
            return;
          }
    
         this.setState({id: nextProps.id, name: nextProps.name, status:nextProps.status});
    };



    render(){
        var name = this.state.name;

        return(
            <li ref={this.setLiRef} onBlur={(e) => this.onBlur(e)} onKeyPress={(e) => this.onKeyPress(e)} contenteditable={(!name) ? "true" : "false"}  style={(!name) ? {height:60, marginBottom:10, marginTop:10} :{} } onClick={(e) => this.onClick(e)}>
               {name}
            </li>
        )
    }
}