import React, { Component } from 'react';
import TodoListTable from './TodoListTable';
import * as actions from '../../actions/todoActions';
import {connect,  bindActionCreators } from 'react-redux';

class MyApp extends React.Component {
  constructor(props){
        super(props);
        this.state = {
            todoList : [{name: 'Planing', status:'done'}, {name: 'Designing', status:'done'}, {name: 'Implementing', status:'done'}]
        }
  }

  // componentDidMount() {
  // }

  render() {
    var todoList = this.state.todoList;
    return 
    (
        <TodoListTable todoList={todoList} actions={actions}/>
    );
  }
}



function mapDispatchToProps(dispatch){
  return {
      actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(MyApp);