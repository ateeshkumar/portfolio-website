import './index.scss';
import AnimatedLetter from '../AnimatedLetter';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMugSaucer} from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
const Project = () => {
    const resume = "http://localhost:3000/Ateesh.pdf";
    const [letterClass,setLetterClass] = useState('text-animate');
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    },[])
const downLoadFile = (url)=>{
    const filename = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = filename;
    aTag.click();

}

    return ( 
        <>
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetter letterClass={letterClass} strArray={['M','y',' ','P','r','o','j','e','c','t','s']}
                     idx={15}>
                    </AnimatedLetter>
                </h1>
                <p>
                Expert in front-end development including technologies like HTML5, CSS3, JavaScript, jQuery, Angular2, React, TypeScript, Jasmine, Bootstrap, Sass, Git, etc.

                </p>
                <p>
                I have a good sense of aesthetics,design and experience in responsive, mobile-first web design. I put special effort into optimizing my code and providing the best user experience. I would love to give you any kind of support also after the project's completion. I guarantee a commitment during work on your project.
                </p>
                <p>
                 More Details: 
                </p>
                <button className='flat-button' onClick={()=>downLoadFile(resume)}>Resume</button>
                
            </div>
            <div className="project-list">
            <div className="face">
                    <div className='project-link'>
                        <FontAwesomeIcon icon={faMugSaucer} color='#dd0031' fontSize={50}/>
                        <p>Project Link: <a href="https://f22e13dc.youtube-clone-ateeshkumar.pages.dev/">YouTube Clone Project</a></p>
                    </div>
                    
                    <div className='code-link'>
                        <FontAwesomeIcon icon={faCode} color='#dd0031' fontSize={50}/>
                        <p>Code Link: <a href="https://github.com/ateeshkumar/YouTube-Clone-React-App">YouTube Clone</a></p>
                        
                    </div> 
                    </div>
                    <div className='bord'/>
                    <div className="face">
                        <div className='project-link'>
                            <FontAwesomeIcon icon={faMugSaucer} color='#f06529' fontSize={50}/>
                            <p>Project Link: <a href="https://restaurants-ui-ux-ateeshkumar.pages.dev/" color='#f06529'>Resturent UI UX Project</a></p>
                        </div>
                        <div className='code-link'>
                            <FontAwesomeIcon icon={faCode} color='#f06529' fontSize={50}/>
                            <p>Code Link: <a href="https://github.com/ateeshkumar/Restaurants-UI-UX-React-App" color='#f06529'>Resturent UI UX Project</a></p>
                        </div>
                    </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    );
}
 
export default Project;