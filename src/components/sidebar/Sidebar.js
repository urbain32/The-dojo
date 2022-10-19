// styles & images
import './Sidebar.css';
import DashboardIcon from '../../assets/dashboard_icon.svg';
import AddIcon from '../../assets/add_icon.svg';
// Links
import { NavLink } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import {useAuthContext} from '../../hooks/useAuthContext'
export default function Sidebar() {
  const {user} = useAuthContext()
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='user'>
          <Avatar src={user.photoURL} />
          <p>Hey,<span>{user.displayName}</span></p>
        </div>
        <div className='links'>
          <ul>
            <li>
              <NavLink end to='/'>
                <img src={DashboardIcon} alt=' dashboard icom' />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/create'>
                <img src={AddIcon} alt=' add projec icom' />
                <span>New project</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
