import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/style.css';


import Home from './Pages/Home';
import Woda from './Pages/Woda';
import Swiatlo from './Pages/Swiatlo';

function App() {
  return (
    <div className="praca-przejsciowa-client">
      <div className="ramka">
      <Router basename="/">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/woda" exact component={Woda} />
          <Route path="/swiatlo" exact component={Swiatlo} />
        </Switch>
      </Router>

      </div>
    </div>
  );
}

export default App;
