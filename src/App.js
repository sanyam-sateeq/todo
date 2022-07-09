import { StoreProvider } from "easy-peasy";
import "antd/dist/antd.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import store from "./store/todoStore";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [data,setData] = useState([]);
  const add=(d)=>{
    console.log(d);
    const a  = nanoid();

    setData([...data, {task:d,id:a}]);
  }
  const rem=(d)=>{
    const n = [...data.filter((todo) => todo.id !== d)];
    console.log(n);
    setData([...n]);
  }
  return (
    <StoreProvider store={store}>
    <div className="App">
      <AddTodo add={add} rem={rem} data={data}/>
  </div>
  </StoreProvider>
  );
}