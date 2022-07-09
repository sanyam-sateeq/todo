import { List,Typography } from "antd";
import TodoItem from "./TodoItem";
import { useStoreState,useStoreActions } from "easy-peasy";
const { Title } = Typography;
export default function TodoList() {
const numberOfItems = useStoreState((state) => state.todoModel.numberOfItems);
  let todos = useStoreState((state) => state.todoModel.todos);
  const addTodo = useStoreActions((state) => state.todoModel.addTodo);
  console.log(todos);
  return (
    <div>
    <Title level={3}> Number of items: {numberOfItems}</Title>
      {todos && (
        <List
          itemLayout="horizontal"
          dataSource={todos}
          renderItem={(item) => <TodoItem todo={item} />}
        />
      )}
    </div>
  );
}