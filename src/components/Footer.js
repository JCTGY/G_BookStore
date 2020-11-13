import React from 'react';
import './Footer.css';

import { 
    AiFillTwitterSquare,
    AiFillGithub,
    AiFillLinkedin,
    AiFillMail
} from 'react-icons/ai';

const Footer = () => {

    return (
        <footer id="footer">
        <div class="icon">
            <a href="https://twitter.com/Jeffreycode42"><AiFillTwitterSquare/></a>
            <a href="https://github.com/JCTGY"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/jeffreycode42/"><AiFillLinkedin/></a>
            <a href="mailto: jc42shcool@gmail.com"><AiFillMail/></a>
        </div>
        <p>© Copyright 2020 Jeffrey</p>

    </footer>
    );
}

export default Footer;