import React from 'react'
import Navigation from '../components/navigation'
import { Element } from 'react-scroll'

import Home from './home'
import About from './about'
import Projects from './projects'

export default function Main (props) {
    return (
        <main className="main">
            <Navigation/>
            <Element name="home" className="category-container">
                <Home/>
            </Element>
            <Element name="about" className='category-container-about'>
                <About/>
            </Element>
            <Element name="projects" className="category-container">
                <Projects/>
            </Element>
            <Element name="blog" className="category-container">
                <div className="site-category-title">Blog</div>
            </Element>
            <Element name="contact" className="category-container">
                <div> CONTACT </div>
            </Element>
        </main>
    )}