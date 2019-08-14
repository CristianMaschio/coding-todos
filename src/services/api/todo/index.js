/*
 * All todo api
 *
 * @author: cristian maschio
 */

import { handlePromise } from "../_apiServices"


function getTodo(index) {
  const promise = fetch("https://jsonplaceholder.typicode.com/todos/" + index)
  return handlePromise(promise)
}

function getTodos() {
  const promise = fetch("https://jsonplaceholder.typicode.com/todos")
  return handlePromise(promise)
}

export { getTodo, getTodos }
