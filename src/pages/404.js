import React from 'react';
import { Link } from 'gatsby';

function NotFound() {
    return (
        <div>
            <h1>Oops, that page doesn't exist!</h1>
            <Link>
                Return to Home
            </Link>
        </div>
    )
}

export default NotFound;