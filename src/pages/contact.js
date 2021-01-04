import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function Contact () {

    return (
        <main className="contact-container">
             <Typography variant="h1" gutterBottom>
                Contact
            </Typography>
            <Typography variant="h2" gutterBottom>
                Email
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                dengconnie0723@gmail.com
            </Typography>
            <Typography variant="h1" gutterBottom>
                Linkedin
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                <a href="https://www.linkedin.com/in/connie-deng">https://www.linkedin.com/in/connie-deng/</a>
            </Typography>
            <Typography variant="h1" gutterBottom>
                Github
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                <a href="https://github.com/connieDeng">https://github.com/connieDeng</a>
            </Typography>
        </main>
    )}