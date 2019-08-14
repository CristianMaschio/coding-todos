/*
 * All todo api
 *
 * @author: cristian maschio
 */

import {handlePromise} from "../_apiServices"


function getTodo(index) {
  const promise = fetch("https://jsonplaceholder.typicode.com/todos/" + index)
  return handlePromise(promise)
}

function getTodos() {
  const promise = fetch("https://jsonplaceholder.typicode.com/todos")
  return handlePromise(promise)
}

function addTodo(title) {
  const promise = fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
      userId: 1,
      title,
      completed: false,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  return handlePromise(promise)
}

export {getTodo, getTodos, addTodo}
