// styles
import './Create.css';
import { useState } from 'react';

export default function Create() {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, dueDate);
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
          {/* category select here */}
        </label>
        <label>
          <span>Assigned to :</span>
          {/* Assigned to  select here */}
        </label>
        <button className='btn'>Add project</button>
      </form>
    </div>
  );
}
