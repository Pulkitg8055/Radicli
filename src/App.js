import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './redux/store';

const DATA = [
    {
        title: 'Important',
        description: 'Having fun is important',
        dueDate: '2021-04-15',
        status: 'ongoing',
    },
];

function App() {
    const [dark, setDark] = useState(false);
    const [todos, setTodos] = useState(DATA);
    const [input, setInput] = useState({
        title: '',
        description: '',
        dueDate: '2021-04-15',
        status: 'Ongoing',
    });

    function handleChange(event) {
        event.preventDefault();

        let { value, name } = event.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    }

    function handleClick() {
        setDark((prev) => !prev);
    }
    return (
        <div className={`${dark ? 'App-darke' : 'App'}`}>
            <header>
                <div>Todo List</div>
                <button
                    className={`${dark ? 'btn-dark' : 'btn-light'}`}
                    onClick={handleClick}
                >
                    {dark ? 'Light-mode' : 'Dark-mode'}
                </button>
            </header>
            <Provider store={store}>
                <Form
                    handleChange={handleChange}
                    setInput={setInput}
                    input={input}
                    setTodos={setTodos}
                    todos={todos}
                    dark={dark}
                />
                <TodoList
                    handleChange={handleChange}
                    setTodos={setTodos}
                    todos={todos}
                    input={input}
                    dark={dark}
                />
            </Provider>
        </div>
    );
}

export default App;
