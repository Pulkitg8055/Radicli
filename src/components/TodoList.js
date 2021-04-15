import React, { useState } from 'react';
import Todo from './Todo';

export default function TodoList({
    todos,
    setTodos,
    input,
    handleChange,
    dark,
}) {
    return (
        <div className={`${dark ? 'darke' : 'light'}`}>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th className='description'>Description</th>
                        <th>Status</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <Todo
                            handleChange={handleChange}
                            input={input}
                            todos={todos}
                            key={index}
                            todo={todo}
                            index={index}
                            setTodos={setTodos}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
