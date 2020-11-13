import React from 'react';
import { Container } from 'react-bootstrap';

import Rout from './components/Rout';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
    return (
        <Container>
            <NavBar />
            <Rout />
            <Footer />
        </Container>
    );
}

export default App;