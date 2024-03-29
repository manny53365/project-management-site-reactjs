import { useState } from 'react';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import ProjectList from '../../components/ProjectList';
import ProjectFilter from './ProjectFilter';
import './Dashboard.css';

export default function Dashboard() {

    const { user } = useAuthContext();
    const { documents, error } = useCollection('projects');
    const [currentFilter, setCurrentFilter] = useState('All');

    const changeFilter = newFilter => {
        setCurrentFilter(newFilter);
    }

    const filteredProjects = documents ? documents.filter((document) => {
        switch (currentFilter) {
            case 'all':
                return true;
            case 'mine':
                let assignedToMe = false;
                document.assignedUsersList.forEach(u => {
                    if (u.id === user.uid){
                        assignedToMe = true;
                    }
                })
                return assignedToMe;
            case 'development':
            case 'design':
            case 'sales':
            case 'marketing':
                return document.category === currentFilter;
            default:
                return true;
        }
    }) : null;

    return (
        <div>
            <h2 className='page-title'>Dashboard</h2>
            {error && <p className='error'>{error}</p>}
            {documents && <ProjectFilter changeFilter = {changeFilter} />}
            {filteredProjects && <ProjectList docs = {filteredProjects} />}
        </div>
    )
};
