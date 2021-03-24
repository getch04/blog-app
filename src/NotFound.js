import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <dv className="not-found">
            <h2>Sorry</h2>
            <p>That page is not found</p>
            <Link to="/">go to the homepage</Link>
        </dv>
     );
}
 
export default NotFound;