import { PencilSquare, Trash3 } from "react-bootstrap-icons";

const Todo = ({ todo, toggleCompleted, editTodo, deleteTodo }) => {
    return (
        <div className="todo">
            <span
                className={`${todo.isCompleted ? "todo-completed" : ""}`}
                onClick={() => toggleCompleted(todo.id)}
            >
                {todo.task}
            </span>
            <div>
                <PencilSquare
                    onClick={() => editTodo(todo.id)}
                    className="todo-icon"
                />
                <Trash3
                    onClick={() => deleteTodo(todo.id)}
                    className="todo-icon"
                />
            </div>
        </div>
    );
};

export default Todo;
