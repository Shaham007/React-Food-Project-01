import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home';
import Footer from './components/Footer';
import About from './pages/about';
import Contact from './pages/contact';
import Menu from './pages/menu';


function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />

        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />

        <Footer />

      </Router>
      
    </div>
  );
}

export default App;
