import React from "react"
import PropTypes from "prop-types"

import {addTodo} from "../../../../services/api/todo"
import {Button, Form, Input} from "antd"



class AddTodo extends React.PureComponent {
  //--------PropTypes---------
  static propTypes = {
    onAddTodo: PropTypes.func
  }

  static defaultProps = {
    onAddTodo: () => {
    }
  }

  //--------state---------
  state = {
    loading: false
  };

  //--------functions---------
  handleAddTodo = (event) => {
    event.preventDefault()
    this.props.form.validateFields(async(err, values)=>{
      if (!err) {
        this.setState({loading: true})

        // get todo name
        const todoName = values.todo

        // add new todo in the db
        const todo = await addTodo(todoName)
        if (todo) this.props.form.resetFields()

        // update the parent component
        this.props.onAddTodo(todo)
        this.setState({loading: false})
      }
    });
  }

   hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field])
  }

  //--------class-render---------
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
    } = this.props.form
    const {loading} = this.state

    // Only show error after a field is touched.
    const todoError = getFieldError('todo')

    return (
      <Form onSubmit={this.handleAddTodo}>
        <Form.Item validateStatus={todoError ? 'error' : ''} help={todoError || ''}>
          {getFieldDecorator('todo', {
            rules: [{required: true, message: 'Please input your todo!'}],
          })(<Input placeholder="Todo"/>,)}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={this.hasErrors(getFieldsError())}
          >
            Add todo
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create({name: 'add_todo'})(AddTodo)
