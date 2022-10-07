// styles
import './Create.css';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useCollection } from '../../hooks/useCollection';
const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
];
export default function Create() {
  const { documents } = useCollection('users');
  const [users, setUsers] = useState([]);


  // form field values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError,setFormError] = useState(null)
  // create a functon to map document
  useEffect(() => {
    if (documents) {
      const options = documents.map(user => {
        return {value:user,label:user.displayName}
      })
      setUsers(options)
    }
  },[documents])

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null)
    if (!category) {
      setFormError('Please select a project category')
      return
    }
    if (assignedUsers.length<1) {
      setFormError('Please assign at the project to at least 1 user ');
      return
    }
    console.log(name, details, dueDate, category.value,assignedUsers);
  };
  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Projects Name:</span>
          <input
            className='input'
            required
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Projects Details:</span>
          <textarea
            required
            type='text'
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          <span>Set due date:</span>
          <input
            className='input'
            required
            type='date'
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
            
          />
        </label>
        <label>
          <span>Project Category:</span>
          <Select
            onChange={(option) => setCategory(option)}
            options={categories}
          />
        </label>
        <label>
          <span>Assigned to :</span>
          <Select
            onChange={(option) => setAssignedUsers(option)}
            options={users}
            isMulti
            
          />
        </label>
        <button className='btn'>Add project</button>
        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  );
}
