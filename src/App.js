import Navbar from './Navbar';
import Roster from './Roster';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Add from './Add';
import PlayerDetails from './PlayerDetails';
import NotFound from './NotFound';
import TeamAccount from './TeamAccount';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/roster"><Roster /></Route>
            <Route path="/add"><Add /></Route>
            <Route path="/account"><TeamAccount /></Route>
            <Route path="/players/:id"><PlayerDetails /></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
