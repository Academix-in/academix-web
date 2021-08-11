import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer'
import NotFound from './components/404'
import Interests from './pages/Interests';
import Dashboard from './pages/Dashboard';
import Video from './pages/Video';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/interests" exact>
            <Interests />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/video" >
            <Video />
          </Route>
          <NotFound />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
