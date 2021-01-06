import React from 'react'

import PostGrid from '../components/post-grid'

import ProjectsContent from './../assets/content/projects-content'

export default function Projects () {
  
    return (
        <main className="projects-containter">
            <PostGrid posts={ProjectsContent}/>
        </main>
    )}