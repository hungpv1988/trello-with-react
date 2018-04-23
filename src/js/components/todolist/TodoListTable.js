import React from 'react';
import TodoRow from './TodoRow';
import {connect} from 'react-redux';

class TodoListTable extends React.Component {
    constructor(props){
        super(props);
     //   var {todoList, criteria} = this.props;
      //  this.state = {todoList, criteria};
    }

    render(){


        var {todoList, criteria} = this.props;

        todoList    = (!criteria) ? todoList : todoList.filter( 
                                                                (item) =>      ((!criteria.name) || (item.name.indexOf(criteria.name) >=0)) 
                                                                            && ((criteria.status == 0) || (item.status >= criteria.status))  
                                                          );
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

// const mapDispatchToProp = (dispatch) => {return {todoList: dispatch()} };
 function mapStateToProps(state) {
     return {
        criteria: state.filter
     }
 } 

 export default connect(mapStateToProps, null) (TodoListTable);
