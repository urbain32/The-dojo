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
          <Sidebar />
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path='/'>
                <Dashboard />
              </Route>

              <Route path='/create'>
                <Create />
              </Route>

              <Route path='/projects/:id'>
                <Project />
              </Route>

              <Route path='/login'>
                <Login />
              </Route>

              <Route path='/signup'>
                <Signup />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
