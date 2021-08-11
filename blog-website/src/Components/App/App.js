import { Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from '../NavBar/NavBar'
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home'
import Lifestyle from '../Pages/Lifestyle/Lifestyle';
import Tutorials from '../Pages/Tutorials/Tutorials';


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
