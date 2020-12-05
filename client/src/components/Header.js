import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';


const Header = () => {

    return (
        <Jumbotron className="header" fluid>
            <Container>
                <h1>G Book Store</h1>
                <p>
                    Entertainment, religious purposes, studying, and more! Books are incredible, and they have taught us so much!
                    <br></br>
                    We have tons of variety books to choose from 
                </p>
            </Container>
        </Jumbotron>
    );
}

export default Header;