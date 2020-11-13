import React from 'react';
import { Container } from 'react-bootstrap';
import { HashRouter } from 'react-router-dom';

import Rout from './components/Rout';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <Container>
            <HashRouter basename='/'>
                <NavBar />
                <Rout />
            </HashRouter>
        </Container>
    );
}

export default App;