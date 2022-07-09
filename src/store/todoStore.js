import { createStore } from "easy-peasy";
import { action,computed  } from "easy-peasy";
import { nanoid } from "nanoid";

const todoModel = {
    numberOfItems: computed((state) => state.todos.length),
    removeTodo: action((state, data) => {
        console.log(data.todo.id)
    const n = [...data.todos.filter((todo) => todo.id !== data.todo.id)];
    state.todos=[...n];
    
      }),
addTodo: action((state, payload) => {
        const a  = nanoid();
        state.todos=[...payload.todos, {task:payload.data.task,id:a}];
      }),
  todos: [{ id: 1, task: "Pick up eggs" }]
};
const store = {
  todoModel
};
export default createStore(store);