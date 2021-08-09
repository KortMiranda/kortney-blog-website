import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './pages/About';
import Home from './pages/Home'
import Lifestyle from './pages/Lifestyle';
import Tutorials from './pages/Tutorials';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/tutorials" component={Tutorials} />
        <Route exact path="/lifestyle" component={Lifestyle} />
      </Switch>
    </div>
  );
}

export default App;
