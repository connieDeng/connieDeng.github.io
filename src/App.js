import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './pages/main'
import Navigation from './components/navigation'
import DataVisCOVIDUnemployment from './pages/project-info-pages/DataVisCOVIDUnemployment'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/DataVisCOVIDUnemployment' component={DataVisCOVIDUnemployment} />
          <Route component={() => 404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
