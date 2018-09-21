// Define collection and schema for todo Item
var _todos = [
  {
    "name": "eat",
    "done": "true"
  },
  {
    "name": "sleep",
    "done": "true"
  },
  {
    "name": "rave",
    "done": "false"
  },
  {
    "name": "repeat",
    "done": "false"
  }
]; // collection of todo items

var Todo = function() {
}

var add = Todo.create = function(item) {
  _todos.push(item)
  return _todos;
}

var find = Todo.find = function() {
  return _todos;
}

module.exports = Todo