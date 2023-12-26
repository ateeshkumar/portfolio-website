import { Link } from 'react-router-dom';
import LogoTitle from '../../assest/images/logo.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetter from '../AnimatedLetter';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass,setLetterClass] = useState('text-animate');
    const nameArray = ['A','t','e','e','s','h'];
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
      ]
    
      useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
      }, []);
    return (
        <>

        <div className="container home-page">
        <div className="text-zone">
        <h1>
            <span className={letterClass}>H</span>        
            <span className={`${letterClass} _12`}>i,</span>        
        <br />
        <span className={`${letterClass} _13`}>{"I'"} </span>  
        <span className={`${letterClass} _14`}> am</span>  
            <img src={LogoTitle} alt="Developer" />
            <AnimatedLetter letterClass={letterClass} strArray={nameArray} idx={15}/>
            <br />
            <AnimatedLetter letterClass={letterClass} strArray={jobArray} idx={15}/>
            </h1>
            <h2>Frontend Developer / JavaScript Expert / YouTuber</h2>
            <Link to="/contact" className='flat-button'>CONTECT ME</Link>
        </div>
        <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
        
    );
}
 
export default Home;