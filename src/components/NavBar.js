import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';

const NavBar = ({ updateTerm }) => {

    const [search, setSearch] = useState("");
    const location = useLocation();
    const history = useHistory();
    const goToShop = () => history.push('/shop');
    
    const onChangeInput = (e) => {
        setSearch(e.target.value);
    }

    const onSubmitSearch = (e) => {
        e.preventDefault();
        updateTerm(search);
        setSearch("");
        if (location.pathname !== "/shop")
            goToShop();
    }

    return (
        <div>
            <img src="https://www.print2eforms.com/wp-content/uploads/2016/10/Introduction-To-Google-Books.jpg" alt="Google Book"></img>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/"><AiOutlineHome /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                    <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl 
                        onChange={onChangeInput} 
                        type="text" 
                        placeholder="Search" 
                        className="mr-sm-2" 
                        value={search}
                        required 
                    />
                    <button 
                        className="btn btn-outline-success my-2 my-sm-0" 
                        onClick={onSubmitSearch} variant="outline-info">
                            <AiOutlineSearch />
                    </button>
                </Form>
            </Navbar>
        </div>
    );
}

export default NavBar;