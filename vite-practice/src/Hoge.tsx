import { useState, useEffect } from "react";
import { Button, Input, DatePicker, Card, Select, Divider } from "antd";
import { DeleteOutlined, UndoOutlined } from "@ant-design/icons";
import "./TodoApp.css";

const { TextArea } = Input;
const { Option } = Select;

interface Todo {
  task: string;
  duedate: string;
  detail: string;
}

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [deletedTodos, setDeletedTodos] = useState<Todo[]>(() => {
    const savedDeletedTodos = localStorage.getItem("deletedTodos");
    if (savedDeletedTodos) {
      return JSON.parse(savedDeletedTodos);
    } else {
      return [];
    }
  });

  const [task, setTask] = useState("");
  const [duedate, setDuedate] = useState<string | null>(null);
  const [detail, setDetail] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("deletedTodos", JSON.stringify(deletedTodos));
  }, [todos, deletedTodos]);

  const handleAddTodo = () => {
    if (task !== "" && duedate !== null && detail !== "") {
      setTodos([...todos, { task, duedate, detail }]);
      setTask("");
      setDuedate(null);
      setDetail("");
    }
  };

  const handleRemoveTodo = (index: number) => {
    const newDeletedTodos = todos.filter((_, todoIndex) => todoIndex === index);
    setDeletedTodos([...deletedTodos, ...newDeletedTodos]);

    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const handleRecoverTodo = (index: number) => {
    const recoveredTodo = deletedTodos[index];
    const newDeletedTodos = deletedTodos.filter((_, idx) => idx !== index);
    setDeletedTodos(newDeletedTodos);
    setTodos([...todos, recoveredTodo]);
  };

  const getFilteredTodos = () => {
    if (filter === "all") return todos;
    if (filter === "overdue") {
      const currentDate = new Date().toISOString().split("T")[0];
      return todos.filter((todo) => todo.duedate < currentDate);
    }
    if (filter === "deleted") return deletedTodos;
    return todos;
  };

  return (
    <div className="App">
      <Select
        className="filter"
        defaultValue="all"
        onChange={(value: string) => setFilter(value)}
      >
        <Option value="all">All</Option>
        <Option value="overdue">Overdue</Option>
        <Option value="deleted">Deleted</Option>
      </Select>

      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task"
        allowClear
        size="large"
      />

      <DatePicker
        className="datePicker"
        onChange={(date, dateString) => setDuedate(dateString)}
        size="large"
      />

      <TextArea
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        placeholder="Detail"
        allowClear
        size="large"
      />

      <Button
        type="primary"
        onClick={handleAddTodo}
        size="large"
        className="addTodoButton"
      >
        Add Todo
      </Button>

      {getFilteredTodos().map((todo, index) => (
        <Card key={index} className="todoItem" size="small">
          <h2>{todo.task}</h2>
          <p>Due: {todo.duedate}</p>
          <p>{todo.detail}</p>
          <Button
            type="dashed"
            icon={filter === "deleted" ? <UndoOutlined /> : <DeleteOutlined />}
            onClick={
              filter === "deleted"
                ? () => handleRecoverTodo(index)
                : () => handleRemoveTodo(index)
            }
            danger={filter !== "deleted"}
          >
            {filter === "deleted" ? "Recover" : "Remove"}
          </Button>
        </Card>
      ))}
    </div>
  );
};
