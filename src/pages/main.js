import React from 'react'
import Navigation from '../components/navigation'
import { Element } from 'react-scroll'

import Home from './home'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import PDF from './resumePDF'
import MiniContactBar from '../components/mini-contact-bar'

export default function Main (props) {
    return (
        <main className="main">
            <Navigation/>
            <MiniContactBar/>
            <Element name="home" className="category-container">
                <Home/>
            </Element>
            <Element name="about" className='category-container'>
                <About/>
            </Element>
            <Element name="projects" className="category-container">
                <Projects/>
            </Element>
            <Element name="contact" className="category-container">
                <Contact/>
            </Element>
            <Element name="PDF" className="category-container">
                <PDF/>
            </Element>
        </main>
    )}