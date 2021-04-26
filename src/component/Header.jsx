import React from 'react';
import {Navbar, Nav, Form} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg='light' variant='light'>
            <div className='container'>
                <NavLink style={{paddingLeft: '40px'}} to='/'><Navbar.Brand>Home</Navbar.Brand></NavLink>
                <Nav className='mr-auto'>
                    <NavLink style={{color: 'black', padding: '3px 0 0 10px'}} to='/list'>Our products</NavLink>
                </Nav>
                <Form inline>
                    <NavLink style={{paddingRight: '40px'}} to='/cart'><img style={{width: '30px'}} src='/cart.png'
                                                                            alt='cart'/></NavLink>
                </Form>
            </div>
        </Navbar>
    );
};

export default Header;