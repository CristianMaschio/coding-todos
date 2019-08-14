import React from "react"

import { getTodos } from "../../services/api/todo"

export default class Home extends React.PureComponent {
  state = {
    todos: undefined,
    loading: true
  }

  async componentDidMount() {
    const todos = await getTodos()
    this.setState({ todos, loading: "false" })
  }

  render() {
    const { todos, loading } = this.state

    return (
      <div className="home">
      </div>
    )
  }
}
