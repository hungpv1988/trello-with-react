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

    render(){
        var styles = {
            border: '1px solid black;'
        };

        var {todoList, cssClass, title} = this.state;
        const itemList = todoList.map((item, index) => <Item status={item.status} name={item.name} moveNext={this.props.moveNext} id={item.id} /> )
        return(
            <div class={cssClass} style={styles}>
                <div class="todolist">
                    <Header title={title}/>
                    {/* <NewItem /> */}
                    <ul id="sortable" class="list-unstyled">
                        {itemList}
                    </ul>
                </div>
            </div>
        )
    }
}