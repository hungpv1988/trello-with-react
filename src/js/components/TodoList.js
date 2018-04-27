import React from 'react';
import Item from './Item';
export default class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {todoList : this.props.todoList};
    };


    componentWillReceiveProps(nextProps) {
        if  (!nextProps.todoList){
          return;
        }
        
  
        this.setState({todoList:nextProps.todoList});
    };

    render(){
        var todoList = this.state.todoList;
        const itemList = todoList.map((item, index) => <Item status={item.status} name={item.name} moveNext={this.props.moveNext} id={item.id} /> )
        return(
            <ul id="sortable" class="list-unstyled">
                {itemList}
            </ul>
        )
    }
}