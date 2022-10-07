import { useCollection } from '../../hooks/useCollection';
// styles
import './OnlineUser.css';
// component
import Avatar from '../avatar/Avatar';
export default function OnlineUser() {
  const { error, documents } = useCollection('users');
  return (
    <div className='user-list'>
      <h2>All users</h2>
      {error && <div className='error'>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className='user-list-item'>
            {user.online && <span className='online-user'></span>}
            {!user.online && <span className='notonline-user'></span>}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
