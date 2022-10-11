// styles
import './Project.css'
// other import
import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'
import Loading from '../../components/loading/Loading'
import ProjectSummary from './ProjectSummary'
import ProjectComments from './ProjectComments'
export default function Project() {
  const { id } = useParams()
  const { document, error } = useDocument('projects', id)
  if (error) {
    return <div className='error'>{error}</div>
  }
  if (!document) {
    return <Loading/>
  }
  return (
    <div className='project-details'>      
      <ProjectSummary project={document} />
      <ProjectComments/>
    </div>
  );
}