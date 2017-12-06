import React from 'react';
import {Link} from 'react-router';

export default class HomePage extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <h1>React, Redux and Express Starter Kit</h1>
                <p>Lets dive into the magic of <strong>Redux</strong></p>
                <Link to="about" className="button button-primary button-large">About us</Link> 
            </div>
        );
    }
}