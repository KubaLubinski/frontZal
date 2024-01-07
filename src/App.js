import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
