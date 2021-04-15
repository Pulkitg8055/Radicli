import React from 'react';

export default function Form({
    setInput,
    input,
    setTodos,
    dark,
    handleChange,
}) {
    function handleSubmit(e) {
        e.preventDefault();

        if (input.title === '') {
            alert('Title required');
        }
        if (input.description === '' || input.description.length < 10)
            alert('Proper Description required');
        else {
            setTodos((prev) => [...prev, { ...input }]);

            setInput({
                title: '',
                description: '',
                dueDate: '2021-04-15',
                status: 'Ongoing',
            });
        }
    }
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;
    return (
        <form onSubmit={handleSubmit} className={`${dark ? 'darke' : ''}`}>
            <div className='row-one'>
                <input
                    className='first-child'
                    onChange={handleChange}
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={input.title}
                />

                <input
                    className='second-child'
                    onChange={handleChange}
                    type='text'
                    name='description'
                    placeholder='Description'
                    value={input.description}
                />
            </div>
            <div className='row-two'>
                <input
                    className='first'
                    onChange={handleChange}
                    type='date'
                    name='dueDate'
                    placeholder='Due Date'
                    value={input.dueDate}
                />
                <select
                    className='second select'
                    name='status'
                    id=''
                    onChange={handleChange}
                    value={input.status}
                >
                    <option value='ongoing'>Ongoing</option>
                    <option value='todo'>Todo</option>
                    <option value='stalled'>Stalled</option>
                    <option value='done'>Done</option>
                </select>
                <button
                    className='third'
                    onClick={handleSubmit}
                    type='submit'
                    name=''
                    id=''
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
