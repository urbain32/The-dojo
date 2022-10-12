// styles
import ProjecList from '../../components/projectList/ProjecList';
import { useCollection } from '../../hooks/useCollection';
import './Dashboard.css';
import ProjectFilter from './ProjectFilter';
import { useState } from 'react';
export default function Dashboard() {
  const { documents, error } = useCollection('projects');
  const [currentFilter, setCurrentFilter] = useState('all');
  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };
  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && (
        <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {documents && <ProjecList documents={documents} />}
    </div>
  );
}
