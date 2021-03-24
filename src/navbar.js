const NavBar = () => {
    return ( 
    <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create" style={{
                backgroundColor:'#f1356d',
                borderRadius:'8px',
                color: 'white'
            }}>New Blog</a>
        </div>
    </nav> );
}
 
export default NavBar;
