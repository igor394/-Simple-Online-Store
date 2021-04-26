import React from 'react';
import {Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const Home = () => {
    return (
        <div id='front-btn'>
            <NavLink to='/list'><Button variant='light'>Let`s go for our product!</Button></NavLink>
        </div>
    );
};

export default Home;