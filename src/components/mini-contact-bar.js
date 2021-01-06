import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function MiniContactBar () {

    return (
        <main className="mini-contact-bar-containter">
            <section className='fixed-container'>
                <EmailIcon style={{fontSize:"2em"}}/>
                {/* dengconnie0723@gmail.com */}
                <a href="https://www.linkedin.com/in/connie-deng" target="_blank"><LinkedInIcon style={{fontSize:"2em"}}/></a>
                <a href="https://github.com/connieDeng" target="_blank"><GitHubIcon style={{fontSize:"2em"}}/></a>
            </section>
        </main>
    )}