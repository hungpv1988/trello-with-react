import React from 'react';
import Item from './Item';
import Header from './Header';
import NewItem from './NewItem';

export default class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {todoList : this.props.todoList, cssClass:  this.props.cssClass, title: this.props.title};
    };


    componentWillReceiveProps(nextProps) {
        if  (!nextProps.todoList){
          return;
        }
        
  
        this.setState({todoList:nextProps.todoList});
    };

    addNew(e)
    {
       // this.props.addNew();
        var {todoList} = this.state;
        todoList = [...todoList, {id: 0, name: '', status: 0}];
        this.setState({todoList: todoList});
    };

    render(){
        var {todoList, cssClass, title} = this.state;
        const itemList = todoList.map((item, index) => <Item status={item.status} name={item.name} moveNext={this.props.moveNext} id={item.id} /> )
        return(
            <div class="list">
                <header>{title}</header>
                <ul id="sortable" class="list-unstyled">
                    {itemList}
                    {/* <li contenteditable="true">Edit ME!</li> */}
                </ul>  
                <footer><a href="#" onClick={(e) => this.addNew(e)}>Add a card...</a></footer>
            </div>
        )
    }
}