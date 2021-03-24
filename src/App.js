import NavBar from './navbar';
import Home from './home';

//root component of the application!!
function App() {
  //dynamic variable!!
  // var title="Welcome to The new blog!";
  // var likes=50;
  return (
    <div className="App">
      <NavBar/>
     <div className="content">
       <Home/>
    
     </div>
    </div>
  );
}

export default App;
