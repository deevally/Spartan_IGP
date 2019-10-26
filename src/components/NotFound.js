import React from 'react';
import { Link } from 'react-router-dom'

import '../css/PageNotFound.css'
const PageNotFound = () => {
    return (
      <div>
        <div className="error">
          <h1>ERROR 404</h1>
          <h3>
            Oops. Looks like you took a wrong turn{" "}
            <Link to="/" className='error-link'>Go Back Home</Link>
          </h3>
        </div>
      </div>
    );
}
 
export default PageNotFound;