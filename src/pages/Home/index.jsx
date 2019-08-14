import React from "react"

import {getTodos} from "../../services/api/todo"
import TodosList from "./components/TodosList"
import AddTodo from "./components/AddTodo"

export default class Home extends React.PureComponent {
  //--------state---------
  state = {
    todos: [],
    loading: true
  };

  //--------lifecycle---------
  componentDidMount = async () => {
    const todos = await getTodos()
    this.setState({todos, loading: false})
  }

  //--------functions---------
  handleCheckTodo = (index) => {
    const todos = [...this.state.todos]
    todos[index].completed = !todos[index].completed
    this.setState({todos})
  }


  handleAddTodo = (todo) => {
    this.setState({todos: [todo, ...this.state.todos]})
  }

  //--------class-render---------
  render() {
    const {todos, loading} = this.state

    return (
      <div className="home">
        <div className="home-section">
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
        <div className="home-section">
          <TodosList
            loading={loading}
            todos={todos}
            onCheck={this.handleCheckTodo}
          />
        </div>
      </div>
    )
  }
}
