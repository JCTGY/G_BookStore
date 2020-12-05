import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import Rout from './components/Rout';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {

    const [term, setTerm] = useState("Google");

    const updateTerm = (search) => {
        setTerm(search);
    }
    return (
        <Container>
            <NavBar updateTerm={updateTerm} />
            <Rout term={term}/>
            <Footer />
        </Container>
    );
}

export default App;