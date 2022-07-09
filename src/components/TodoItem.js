
import { List, Button, Typography } from "antd";
import { useStoreActions } from "easy-peasy";
const { Text } = Typography;


export default function TodoItem({ todo ,removeTodo,todos }) {
console.log("todoitem",todo);
  return (
    <>

    <List.Item
      actions={[<Button type="primary" danger onClick={() => removeTodo(todo.id)}> Delete</Button>]}
    >
        
      <Text> {todo.task.title} </Text>
      <Text> {todo.task.Discription} </Text>
      {todo.task.date?<Text> {todo.task.date} </Text>:<></>}
      {todo.task.tags?<Text> {todo.task.tags} </Text>:<></>}
    </List.Item>
  </>
  );
}