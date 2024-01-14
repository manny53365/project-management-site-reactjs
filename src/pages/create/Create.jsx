import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useCollection } from '../../hooks/useCollection';
import './Create.css';

const categories = [
    {value: 'development', label: 'Development'},
    {value: 'design', label: 'Design'},
    {value: 'sales', label: 'Sales'},
    {value: 'marketing', label: 'Marketing'}
];

export default function Create() {
    const { documents } = useCollection('users');
    const [users, setUsers] = useState([]);

    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('');
    const [assignedUsers, setAssignedUsers] = useState([]);
    const [formError, setFormError] = useState(null);

    useEffect(() => {
        if(documents){
            const options = documents.map(user => {
                return {value: user, label: user.displayName}
            })
            setUsers(options);
        }
    }, [documents]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormError(null);

        if(!category){
            setFormError('Please select a project category');
            return;
        };
        if (assignedUsers.length < 1){
            setFormError('Please assign a project at least one user');
            return;
        };

        console.log(name, details, dueDate, category, assignedUsers);
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
                    <Select 
                    options={categories}
                    onChange={option => setCategory(option)}
                    />
                </label>
                <label>
                    <span>Assign to:</span>
                    <Select 
                    options={users}
                    onChange={option => setAssignedUsers(option)}
                    isMulti
                    />
                </label>
                <button className='btn'>Create project</button>
                {formError && <p className='error'>{formError}</p>}
            </form>
        </div>
    )
};
