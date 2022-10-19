// import styles
import './Navbar.css';
// Links
import { Link } from 'react-router-dom';
// import logo
import Temple from '../../assets/temple.svg';
// hook for logout
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='dojo logo' />
          <span>Buja Site</span>
        </li>

        {!user && (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Sign up</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              {!isPending && (
                <button className='btn' onClick={logout}>
                  Logout
                </button>
              )}
              {isPending && (
                <button className='btn' disabled>
                  Logging out...
                </button>
              )}
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
