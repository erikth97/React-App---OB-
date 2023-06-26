import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from "./pages/about-fags/AboutPage";

function AppRoutingOne() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" Component={ HomePage} />
          <Route path='/(about|faqs)' component={ AboutPage } />
          {/* 404 - page not found*/}
          <Route Component={ NotFoundPage } />
        </Switch>
      </Router>
  );
}

export default AppRoutingOne;
