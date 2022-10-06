// styles
import './Login.css'
// hooks and state
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // useSignup hook
  const { login, isPending, error } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    // login(email, password);
    console.log(email,password)
  };
  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          className='input'
          required
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          className='input'
          required
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className='btn'>Login</button>
      {/* {!isPending && <button className='btn'>Login</button>}
      {isPending && (
        <button className='btn' disabled>
          Loading...
        </button>
      )}
      {error && <div className='error'>{error}</div>} */}
    </form>
  );
}