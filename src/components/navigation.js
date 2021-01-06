import { LineStyle } from '@material-ui/icons';
import React, {useState} from 'react'
import { Link } from 'react-scroll';
import { Squash as Hamburger } from 'hamburger-react'

const navLinks = [
    {
      title: 'Home',
      path: 'home'
    },
    {
      title: 'About',
      path: 'about'
    },
    {
      title: 'Projects',
      path: 'projects'
    },
    {
      title: 'Blog',
      path: 'blog'
    },
    {
      title: 'Contact',
      path: 'contact'
    }
  ]

export default function Navigation () {
  //HOOK changes menu state false and active
    const [menuActive, setMenuActive] = useState(false)

    return (
    //when menu is clicked on hence active
    <nav className={`site-navigation ${menuActive && 'active'}`} role="navigation">
        <div className="your-name">
          <Link to="home" spy={true} smooth={true} duration={500}>CONNIE DENG</Link>
        </div>
        <div className="menu-content-container">
          <ul>
              { navLinks.map((link, index) => (
                  <Link key={index} className='nav-links' to={link.path} spy={true} smooth={true} duration={500}>
                    {link.title}
                  </Link>
                ))
              }
              </ul>
        </div>
        {/* <i> tage is used to mark up text that is set off from the normal prose in a document */}
        <div className='menu-container'>
        <Hamburger 
            style={{float:'right'}}
            className="hamburger-menu"
            //clicking activating menu
            //onClick={(ev) => setMenuActive(!menuActive)}
            toggled={menuActive} toggle={setMenuActive}
        />
        </div>
    </nav>
  )
}