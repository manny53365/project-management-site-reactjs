import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import './ProjectList.css';

export default function ProjectList({ docs }) {
    return (
        <div className='project-list'>
            {docs.length === 0 && <p className='error'>No projects yet!</p>}
            {docs.map(doc => (
                <Link to={`/projects/${doc.id}`} key={doc.id}>
                    <h4>{doc.name}</h4>
                    <p>{`Due by ${doc.dueDate.toDate().toDateString()}`}</p>
                    <div className='assigned-to'>
                        <ul>
                            {doc.assignedUsersList.map(user => (
                                <li key={user.photoURL}>
                                    <Avatar src = {user.photoURL}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Link>
            ))}
        </div>
    )
};
