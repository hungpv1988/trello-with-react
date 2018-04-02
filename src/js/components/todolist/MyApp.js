import React from 'react';
import TodoListTable from './TodoListTable';

export default class MyApp extends React.Component{
    constructor(){
        super();
        this.state = {
            todoList : [{name: 'Planing', status:'done'}, {name: 'Designing', status:'done'}, {name: 'Implementing', status:'done'}]
        }
    }

    render(){
        var todoList = this.state.todoList;
        return(
           <div>fuck</div>
        )
    }
} 

// function mapStateToProps(state) {
//   return {
//       state
//   };
// }

// const mapDispatchToProps = (dispatch) => { return { onDeleteButtonClick: (id) => { dispatch(deleteTodo(id)) } } }

// export default connect(mapStateToProps, mapDispatchToProps)(MyApp);