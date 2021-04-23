import React from 'react';
import {Navbar, Nav,Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
            <Navbar bg="light" variant="light">
                <div className='container'>
                    <NavLink to="/"><Navbar.Brand >Home</Navbar.Brand></NavLink>
                <Nav className="mr-auto">
                    <NavLink to="/list">Our products</NavLink>
                </Nav>
                <Form inline>
                    <NavLink to="/cart">Cart</NavLink>
                </Form>
                </div>
            </Navbar>
    );
};

export default Header;