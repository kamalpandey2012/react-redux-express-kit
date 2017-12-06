import './header.css';
import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return(
        <nav className="primary_navigation">
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/upload-course" activeClassName="active">Upload course</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
        </nav>
    );
};

export default Header;