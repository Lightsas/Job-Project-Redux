import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './component/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleLaunchesPage from './component/singlelauncehespage/SingleLaunchesPage';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/launches/:id" component={SingleLaunchesPage}></Route>
        </Switch>
    </div>
  );
}

export default App;
