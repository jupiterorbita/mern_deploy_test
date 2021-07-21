import './App.css';
import Create from './components/Create';
import Main from './components/Main';
import Update from './components/Update';
import ViewOne from './components/ViewOne';
import {Router, Redirect, Link} from "@reach/router";


function App() {
  return (
    <div className="App">
      <h2>Notes!</h2>
      <Link to="/"> HOME </Link> | <Link to="/notes/new"> CREATE </Link>

      <Router>
        <Redirect from="/" to="/notes" noThrow="true"/>
        <Update path="/notes/update/:id" />
        <Create path="/notes/new" />
        <ViewOne path="/notes/:id" />
        <Main path="/notes"/>

      </Router>
    </div>
  );
}

export default App;
