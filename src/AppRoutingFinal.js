import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Notfoundpage from './pages/404/NotFoundPage';
import Loginpage from './pages/auth/LoginPage';
import Dashboardpage from './pages/dashboard/DashBoard';


function AppRoutingFinal() {

  // TODO Change to value from sessionStorage (or something dinamic)
  let loggedIn = true; 

  return (
    <Router>
      {/* Route Switch*/}
      <Switch>
      {/* Redirections to protect our routes */}
        <Route exact path='/'>
          {
            loggedIn ? 
            (<Redirect from='/' to='/dashboard'/>)
            :
            (<Redirect from='/' to='/login'/>)
          }
        </Route>
        {/* Login Route */}
        <Route exact path='loggin' component={Loginpage} />
        {/* DashBoard Route*/}
        <Route exact path='/dashboard'>
          {
            loggedIn ? 
            (<Dashboardpage />)
            (<Redirect from='/' to='/dashboard'/>)
            :
            (<Redirect from='/' to='/login'/>)
          }
        </Route>

        <Route component={Notfoundpage}/>
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;