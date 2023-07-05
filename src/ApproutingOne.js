import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from "./pages/about-fags/AboutPage";

function ApproutingOne() {
  return (
      <Router>
       <div>
          <aside>
            <Link to='/'>|| Home |</Link>
            <Link to='/about'>| ABOUT |</Link>
            <Link to='/faqs'>| FAQs |</Link>
            <link to='/any404'>| Not Existing Route ||</link>
          </aside>
       
          <main>
          <Switch>
            <Route exact path="/" Component={ HomePage } />
            <Route path='/(about|faqs)' component={ AboutPage } />
            {/* 404 - page not found*/}
            <Route Component={ NotFoundPage } />
          </Switch>
          </main>
       
       </div>



      </Router>
  );
}

export default ApproutingOne;
