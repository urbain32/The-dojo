// styles & images
import './Sidebar.css';
import DashboardIcon from '../../assets/dashboard_icon.svg';
import AddIcon from '../../assets/add_icon.svg';
// Links
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='user'>
          {/* avatar and username here later */}
          <p>Hey user</p>
        </div>
        <div className='links'>
          <ul>
            <li>
              <NavLink exact to='/'>
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
