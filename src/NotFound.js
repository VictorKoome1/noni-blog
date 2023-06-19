import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
         <h2>Sorry</h2>
         <p>Could not be found: Error 404</p>
        <Link to="/">Back to Home page</Link>
        </div>
     );
}
 
export default NotFound;