import { useState } from "react";

const TodoForm = ({ addNewTask }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addNewTask(value);
            setValue("");
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                className="todo-form-input"
                value={value}
                type="text"
                placeholder="What needs to be done?"
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="todo-form-btn" type="submit">
                Add task
            </button>
        </form>
    );
};

export default TodoForm;
