import NavBar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

//root component of the application!!
function App() {
  //dynamic variable!!
  // var title="Welcome to The new blog!";
  // var likes=50;
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="content">

        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/create"><Create/></Route>
          <Route path="/blogs/:id"><BlogDetails/></Route>
          <Route path="*"><NotFound/></Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
