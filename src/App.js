// styles
import './App.css';
// react router dom
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
// pages and component
import Dashboard from './pages/dashboard/Dashboard';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Create from './pages/create/Create';
import Project from './pages/project/Project';
import Navbar from './components/navabar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const {user,authIsReady}= useAuthContext()
  return (
    <div className='App'>
      {/* when auth is ready and the user is ready  */}
      {/* then the information will be shawn */}
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path='/'>
                {user && <Dashboard />}
                {!user && <Redirect to='/login' />}
              </Route>

              <Route path='/create'>
                {user && <Create />}
                {!user && <Redirect to='/login' />}
              </Route>

              <Route path='/projects/:id'>
                {user && <Project />}
                {!user && <Redirect to='/login' />}
              </Route>

              <Route path='/login'>
                {!user && <Login />}
                {user && <Redirect to='/' />}
              </Route>
              <Route path='/signup'>
                {!user && <Signup />}
                {user && <Redirect to='/' />}
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
