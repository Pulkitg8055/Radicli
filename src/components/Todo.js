import React, { useState } from 'react';

export default function Todo({ todo, setTodos, todos, dark }) {
    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.title !== todo.title));
    };

    const [completed, setCompleted] = useState(false);
    const [stalled, setStalled] = useState(false);

    function handleSelect(e) {
        let status = e.target.value;
        setTodos(
            todos.map((item) => {
                if (item.title === todo.title) {
                    return {
                        ...item,
                        status: e.target.value,
                    };
                }
                return item;
            })
        );
        if (status === 'done') setCompleted(true);
        else setCompleted(false);

        status === 'stalled' ? setStalled(true) : setStalled(false);
        // console.log(status === 'done');
    }

    const options = ['Todo', 'Ongoing', 'Stalled', 'Done'];
    return (
        <>
            <tr className={`${dark ? 'darke' : 'light'}`}>
                <td
                    className={`${completed ? 'completed' : ''} ${
                        stalled ? 'stalled' : ''
                    }`}
                >
                    {completed}
                    {todo.title ? todo.title : '????'}
                </td>
                <td
                    className={`${completed ? 'completed' : ''} ${
                        stalled ? 'stalled' : ''
                    }`}
                >
                    {todo.description ? todo.description : '????'}
                </td>
                <td>
                    <select
                        className='select'
                        name='status'
                        id=''
                        onChange={handleSelect}
                    >
                        <option
                            className={`${completed ? 'completed' : ''} ${
                                stalled ? 'stalled' : ''
                            }`}
                            value={todo.status}
                        >
                            {todo.status.substring(0, 1).toUpperCase() +
                                todo.status.substring(1)}
                        </option>
                        {options.map((element) =>
                            todo.status !== element.toLowerCase() ? (
                                <option
                                    key={element}
                                    value={element.toLowerCase()}
                                >
                                    {element}
                                </option>
                            ) : (
                                ''
                            )
                        )}
                    </select>
                </td>
                <td
                    className={`${completed ? 'completed' : ''} ${
                        stalled ? 'stalled' : ''
                    }`}
                >
                    {todo.dueDate ? todo.dueDate : '????'}
                </td>

                <td className='btn'>
                    <button onClick={deleteHandler} className='trash-btn'>
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
}
