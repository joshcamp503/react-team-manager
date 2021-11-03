import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <Link to="/"><h1>Team Manager</h1></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Player</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
