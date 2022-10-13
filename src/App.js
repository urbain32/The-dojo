// styles
import './App.css';
// react router dom
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// pages and component
import Dashboard from './pages/dashboard/Dashboard';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Create from './pages/create/Create';
import Project from './pages/project/Project';
import Navbar from './components/navabar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { useAuthContext } from './hooks/useAuthContext';
import OnlineUser from './components/user-sidebar/OnlineUser';

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className='App'>
      {/* when auth is ready and the user is ready  */}
      {/* then the information will be shawn */}
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className='container'>
            <Navbar />
            <Routes>
              <Route
                path='/'
                element={user ? <Dashboard /> : <Navigate to='/login' />}
              />

              <Route
                path='/create'
                element={user ? <Create /> : <Navigate to='/login' />}
              />

              <Route
                path='/projects/:id'
                element={user ? <Project /> : <Navigate to='/login' />}
              />

              <Route
                path='/login'
                element={!user ? <Login /> : <Navigate to='/' />}
              />

              <Route
                path='/signup'
                element={!user ? <Signup /> : <Navigate to='/' />}
              />
            </Routes>
          </div>
          {user && <OnlineUser />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
