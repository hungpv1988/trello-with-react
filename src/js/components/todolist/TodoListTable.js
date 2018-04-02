import React from 'react';
import TodoRow from './TodoRow';

export default class TodoListTable extends React.Component {
    constructor(){
        super();
    }

    render(){
        var todoList = this.props.todoList;

        const dataRows =  todoList.map( (item, index) => <TodoRow todo={item}/> )
        return(
            <div align="center">
                    <table border="1" width="450px">
                        <tr>
                            <th> name </th>
                            <th> status </th>
                            <th> delete </th>
                        </tr>
                      { 
                        dataRows
                      }
                   </table>
            </div>
        );
    }
}