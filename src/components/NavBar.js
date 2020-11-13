import React from 'react';
import {  HashRouter } from 'react-router-dom';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';

const NavBar = () => {

    return (
        <HashRouter basename='/'>
        <div>
            <img src="https://www.print2eforms.com/wp-content/uploads/2016/10/Introduction-To-Google-Books.jpg" alt="Google Book"></img>

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><AiOutlineHome /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info"><AiOutlineSearch /></Button>
                </Form>
            </Navbar>
        </div>
        </HashRouter>
    );
}

export default NavBar;