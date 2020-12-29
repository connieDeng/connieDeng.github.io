import React, {useState} from 'react'
import { Link } from 'react-scroll';

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
        <div className="menu-avatar-container">
          <Link to="home" spy={true} smooth={true} duration={500}>Connie Deng</Link>
        </div>
        <div className="menu-content-container">
          <ul>
              { navLinks.map((link, index) => (
                  <Link to={link.path} spy={true} smooth={true} duration={500}>
                    {link.title}
                  </Link>
                ))
              }
              </ul>
        </div>
        {/* <i> tage is used to mark up text that is set off from the normal prose in a document */}
        <i 
            className="icon ionicons ion-ios-menu"
            //clicking activating menu
            onClick={(ev) => setMenuActive(!menuActive)}
        />
    </nav>
  )
}