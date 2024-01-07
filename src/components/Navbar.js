import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>Jakub Lubiński</h1>
            <div className="links">
                <Link to="/">O mnie</Link>
                <Link to="/projects">Projekty</Link>
                <Link to="/contact">Kontakt</Link>
                
            </div>
        </nav>
        
    );
}
 
export default Navbar;