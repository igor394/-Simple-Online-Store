import React from 'react';
import {Navbar, Nav,Form} from "react-bootstrap";

const Header = () => {
    return (

            <Navbar bg="light" variant="light">
                <div className='container'>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/list">Our products</Nav.Link>

                </Nav>
                <Form inline>

                    <Nav.Link href="/cart">Cart</Nav.Link>
                </Form>
                </div>
            </Navbar>

    );
};

export default Header;