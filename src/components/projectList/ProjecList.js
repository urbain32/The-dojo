// styles
import './ProjectList.css';
export default function ProjecList({ documents }) {
  return (
    <div>
      {documents.length == 0 && <p>No projects yet</p>}
      {documents.map((doc) => (
        <div key={doc.id}>{doc.name}</div>
      ))}
    </div>
  );
}
