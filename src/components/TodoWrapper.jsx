import { useState } from "react";
import TodoForm from "./TodoForm";
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";
import { Trash3 } from "react-bootstrap-icons";

const TodoWrapper = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState(storedTodos);

    const addNewTask = (task) => {
        const newTodo = {
            id: Date.now(),
            task,
            isCompleted: false,
            isEditing: false,
        };
        setTodos([...todos, newTodo]);
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    };

    const toggleCompleted = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
        localStorage.setItem("todos", JSON.stringify(filteredTodos));
    };

    const editTodo = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        );
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const editTask = (id, task) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: false } : todo
        );
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const handleClearClick = () => {
        setTodos([]);
        localStorage.clear();
    };

    return (
        <div className="todo-wrapper">
            <h1 className="todo-heading">Get things done!</h1>
            <TodoForm addNewTask={addNewTask} />
            {todos.map((todo, index) =>
                todo.isEditing ? (
                    <EditTodoForm key={index} todo={todo} editTask={editTask} />
                ) : (
                    <Todo
                        key={index}
                        todo={todo}
                        toggleCompleted={toggleCompleted}
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            )}
            {!todos.length && <h2 className="todo-empty">List is empty</h2>}
            <button onClick={handleClearClick} className="todo-clear-btn">
                <Trash3 />
            </button>
        </div>
    );
};

export default TodoWrapper;
