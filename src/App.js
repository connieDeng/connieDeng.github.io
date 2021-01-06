import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './pages/main'
import Navigation from './components/navigation'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' component={Main} />
          <Route component={() => 404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
