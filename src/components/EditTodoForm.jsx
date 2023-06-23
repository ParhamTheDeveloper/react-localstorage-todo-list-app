import { useState } from "react";

const EditTodoForm = ({ todo, editTask }) => {
    const [value, setValue] = useState(todo.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(todo.id, value);
    };

    const handleCancelClick = () => {
        todo.isEditing = false;
    };

    return (
        <form className="edit-todo-form" onSubmit={handleSubmit}>
            <input
                className="edit-todo-form-input"
                value={value}
                type="text"
                placeholder="Update your task"
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="edit-todo-form-btn" type="submit">
                Update Task
            </button>
        </form>
    );
};

export default EditTodoForm;
