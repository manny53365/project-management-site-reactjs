import './ProjectList.css';

export default function ProjectList({ docs }) {
    return (
        <div>
            {docs.length === 0 && <p className='error'>No projects yet!</p>}
            {docs.map(doc => (
                <p key={doc.id}>{doc.name}</p>
            ))}
        </div>
    )
};
