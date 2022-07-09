import { useForm, Controller } from "react-hook-form";
import { useStoreActions,useStoreState } from "easy-peasy";
import { Input,Typography,List } from "antd";
import TodoItem from "./TodoItem";
const { Title } = Typography;
export default function AddTodo({data,rem,add}) {

  const numberOfItems =data.length;

  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => {
    add(data);
    reset(); //empty the contents of the textbox
  };
  const onRem =(data)=>{
    rem(data);
  }
  return (
    <>
  
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        defaultValue="title"
        render={({ field }) => <Input label="title" autoComplete="off" maxLength={100} required={ true}  {...field} />}
      />
      <Controller
        name="Discription"
        control={control}
        defaultValue="Discription"
        render={({ field }) => <><Input label="Discription" autoComplete="off"  maxLength={1000} required={ true} {...field} /></>}
      />
      <Controller
        name="date"
        control={control}
        defaultValue="date"
        label="date"
        render={({ field }) => <Input label={"date"} autoComplete="off" {...field} />}
      />
      <Controller
        name="tags"
        control={control}
        defaultValue="tags"
        render={({ field }) => <Input label="tags" autoComplete="off" {...field} />}
      />
      <input type="submit" value="Add" />
    </form>

      <div>
      <Title level={3}> Number of items: {numberOfItems}</Title>
      
          <List
            itemLayout="horizontal"
            dataSource={data}
        renderItem={(item) => <TodoItem todo={item} removeTodo={onRem} />}
          />
        
      </div>
      </>
  );
}