import React from "react"
import PropTypes from "prop-types"
import {Skeleton, Button} from "antd"

export default class TodosList extends React.PureComponent {
  //--------PropTypes---------
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      userId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    })),
    loading: PropTypes.bool,
    onDelete: PropTypes.func,
    onCheck: PropTypes.func
  };

  static defaultProps = {
    todos: [],
    loading: false
  };

  //--------render-functions---------
  renderTodo = (todo, index) => {
      return (
        <div key={todo.id+Math.random()} className="todo">
          <Button
            className="check-todo"
            shape="circle"
            size="small"
            onClick={()=>this.props.onCheck(index)}
          >{todo.completed ? "✓" : ""}</Button>
          <div className="todo-text">{todo.title}</div>
        </div>
      )
  }

  //--------class-render---------
  render() {
    const {todos, loading} = this.props
    return (
      <div className="todos-list">
        <Skeleton loading={loading} active avatar={{shape: "circle"}} paragraph={false}/>
        {todos &&
        todos.map(this.renderTodo)}
      </div>
    )
  }
}