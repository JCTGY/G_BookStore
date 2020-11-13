import React from 'react';
import { Container } from 'react-bootstrap';
import Rout from './components/Rout';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <Container>
            <NavBar />
            <Rout />
        </Container>
    );
}

export default App;