import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
    <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" style={{
                backgroundColor:'#f1356d',
                borderRadius:'8px',
                color: 'white'
            }}>New Blog</Link>
        </div>
    </nav> );
}
 
export default NavBar;
