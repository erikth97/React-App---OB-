import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import Notfoundpage from './pages/404/NotFoundPage';
import Aboutpage from './pages/about-faqs/AboutPage';
import Profilepage from './pages/profile/ProfilePage';
import Taskspage from './pages/tasks/TasksPage';
import Taskdetailpage from './pages/profile/TaskDetailpage';

function AppRoutingOne() {
  return (
    <Router>
         <div>
            <aside>
              <Link to='/'>|| HOME |</Link>
              <Link to='/about'>| ABOUT |</Link>
              <Link to='/faqs'>| FAQs ||</Link>
              <Link to='/any404'>| Not Exsisting Route ||</Link>
            </aside>

            <main>
              <Switch>
                <Route exact path='/' component={ HomePage } />
                <Route path='/(about|faqs)' component={ Aboutpage }/>
                <Route path='/profile' component={ Profilepage } />
                <Route path='/tasks' component={ Taskspage } />
                <Route path='/task/:id' component={ Taskdetailpage }/>
                {/* 404- Page Not Found*/}
                <Route component={ Notfoundpage } />
            </Switch>
            </main>

         </div>

    </Router>
  );
}

export default AppRoutingOne;