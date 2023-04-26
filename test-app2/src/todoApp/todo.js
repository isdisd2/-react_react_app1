import React, { Component, useState, useEffect, useRef, useMemo } from "react";
import "../App.css";

function Todo() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (localValue == null) return [];
        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos));
    }, [todos]);

    function toogleTodo(id, completed) {
        setTodos((QQcurrentTodosX) => {
            return QQcurrentTodosX.map((todo) => {
                return todo.id === id ? { ...todo, completed } : todo;
            });
        });
    }

    function addTodo(newItem) {
        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title: newItem, completed: false },
            ];
        });
    }

    function deleteTodo(id) {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id);
        });
    }

    return (
        <>
            <AddNewForm onSubmit={addTodo} />
            <TodoList
                todos={todos}
                toogleTodo={toogleTodo}
                deleteTodo={deleteTodo}
            />
        </>
    );
}

function AddNewForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return;
        onSubmit(newItem);
        setNewItem("");
    }
    return (
        <>
            <div>
                <form className="add-new-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="item">New Item</label>
                        <input
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                            type="text"
                            id="item"
                        />
                    </div>
                    <button className="btn">Add</button>
                </form>
            </div>
        </>
    );
}

function TodoList({ todos, toogleTodo, deleteTodo }) {
    return (
        <ul>
            {todos.length === 0 && "No todos"}
            {todos.map((item) => (
                <TodoItem
                    key={item.id}
                    {...item}
                    toogleTodo={toogleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
}

function TodoItem({ completed, id, title, toogleTodo, deleteTodo }) {
    return (
        <>
            <li key={id}>
                <label>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => toogleTodo(id, e.target.checked)}
                    />
                    {title}
                </label>
                <button
                    onClick={() => deleteTodo(id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </li>
        </>
    );
}
export default Todo;
