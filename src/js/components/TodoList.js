import React from 'react';
import Item from './Item';
import Header from './Header';
import NewItem from './NewItem';
import autobind from 'react-autobind';

export default class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {todoList : this.props.todoList, cssClass:  this.props.cssClass, title: this.props.title};
        autobind(this);
    };


    componentWillReceiveProps(nextProps) {
        if  (!nextProps.todoList){
          return;
        }
         
        this.setState({todoList:nextProps.todoList});
    };

    addNew(e)
    {
        var {todoList} = this.state;
        todoList = [...todoList, {id: 0, name: '', status: this.props.status}];
        this.setState({todoList: todoList});
    };

    onItemUpdate(item)
    {
        if (item.id > 0)
        {
            this.props.editTodo({id: item.id, name: item.name, status: item.status});    
        }
        else
        {   
            if (!item.name){
                var todoList = this.state.todoList.filter((item, index) => (!item.name) == false);
                this.setState({todoList: todoList});
                return;
            }
            this.props.addNew(item.name, item.status);
        }    
    };

    render(){
        var {todoList, cssClass, title} = this.state;
        const itemList = todoList.map((item, index) => <Item onItemUpdate={this.onItemUpdate} status={item.status} name={item.name} moveNext={this.props.moveNext} id={item.id} /> )
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