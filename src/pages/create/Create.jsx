import { useState } from 'react';
import './Create.css';

export default function Create() {

    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('');
    const [assignedUsers, setAssignedUsers] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, details, dueDate)
    }

    return (
        <div className='create-form'>
            <h2 className='page-title'>Create a new project</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Project Name:</span>
                    <input
                    type="text"
                    required
                    onChange={event => setName(event.target.value)}
                    value={name}
                    />
                </label>
                <label>
                    <span>Project details:</span>
                    <textarea
                    type="text"
                    required
                    onChange={event => setDetails(event.target.value)}
                    value={details}
                    />
                </label>
                <label>
                    <span>Enter the due date:</span>
                    <input
                    type="date"
                    required
                    onChange={event => setDueDate(event.target.value)}
                    value={dueDate}
                    />
                </label>
                <label>
                    <span>Project Category: </span>
                </label>
                <label>
                    <span>Assign to:</span>
                </label>
                <button className='btn'>Create project</button>
            </form>
        </div>
    )
};
