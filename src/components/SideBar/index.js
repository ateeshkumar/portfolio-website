import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assest/images/logo-s.png'
import LogoSubTile from '../../assest/images/ateesh__s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faInstagram,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faGears,
  } from '@fortawesome/free-solid-svg-icons';
const Sidebar = ()=>{
    return(
       <div className="nav-bar">
       <Link className='logo' to='/'>
        <img src={LogoS} alt='Logo'/>
        <img className='sub-logo' src={LogoSubTile} alt='Logo'/>
       </Link>
       
       <nav>
        <NavLink exact="true" activeclassname="active" to="/">
         <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
         <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className='project-link' to="/projects">
         <FontAwesomeIcon icon={faGears} color="#4d4d4e" />
        </NavLink>
        
        <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
         <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        
       </nav>
       <ul>
        <li>
        <a href="https://www.linkedin.com/in/ateesh-kumar-2b4a721b3" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
        </a>
        </li>
        <li>
        <a href="http://github.com/ateeshkumar" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
        </a>
        </li>
        <li>
        <a href="http://instagram.com/thisisateesh" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
        </a>
        </li>
        <li>
        <a href="https://join.skype.com/invite/vPUmN7dV5Ds8" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faSkype} color='#4d4d4e'/>
        </a>
        </li>
       </ul>
       </div>
    );
}
export default Sidebar;