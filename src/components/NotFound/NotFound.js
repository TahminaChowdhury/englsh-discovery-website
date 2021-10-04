import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="text-center m-5">
            <h1 className="not-found">4<i class="far fa-frown"></i>4</h1>
            <h1>Page Not Found</h1>
            <Link to="/home">
            <Button variant="primary">Go Home
            </Button>
            </Link>
        </div>
    );
};

export default NotFound;