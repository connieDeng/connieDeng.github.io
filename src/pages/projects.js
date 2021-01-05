import React from 'react'

import PostGrid from './../assets/post-grid'
import Modal from '@material-ui/core/Modal';

// import fillerImg from './../assets/images/fillerImg.jpg'
import projConent from './../assets/content/projects-content'

export default function Projects () {
  
    return (
        <main className="projects-containter">
            <PostGrid posts={projConent}/>
        </main>
    )}