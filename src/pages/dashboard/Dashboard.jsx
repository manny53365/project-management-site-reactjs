import { useState } from 'react';
import ProjectList from '../../components/ProjectList';
import { useCollection } from '../../hooks/useCollection';
import './Dashboard.css';
import ProjectFilter from './ProjectFilter';

export default function Dashboard() {

    const { documents, error } = useCollection('projects');
    const [currentFilter, setCurrentFilter] = useState('All');

    const changeFilter = newFilter => {
        setCurrentFilter(newFilter);
    }

    return (
        <div>
            <h2 className='page-title'>Dashboard</h2>
            {error && <p className='error'>{error}</p>}
            {documents && (
            <ProjectFilter
            currentFilter = {currentFilter}
            changeFilter = {changeFilter}
            />)}
            {documents && <ProjectList docs = {documents} />}
        </div>
    )
};
