import './index.scss';
import LogoS from '../../../assest/images/image.png';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap-trial';
const Logo = () => {
    const bgRf = useRef();
    const outLineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(()=>{
        // gsap.registerPlugin(DrawSVGPlugin);
        gsap.timeline().to(bgRf.current,{
            duration:1,
            opacity:1
        }).from(outLineLogoRef.current,{
            drawSVG:0,
            duration:20
        })
        gsap.fromTo(
            solidLogoRef.current,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              delay: 4,
              duration: 4,
            }
          )
    },[]) 

    return ( 
        <div className="logo-container" ref={bgRf}>
            <img ref={solidLogoRef} src={LogoS} alt="A" className="solid-logo" />
            <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="-28.6146 -55.69225 247.9932 334.1535"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
          ref={outLineLogoRef}
            d="M91.256 43.595c-42.332 2.172-75.995 37.577-75.995 80.931 0 14.627 3.832 28.349 10.535 40.195l-8.118 15.765C6.548 164.704 0 145.388 0 124.526c0-53.278 42.704-96.473 95.382-96.473.753 0 1.504.009 2.252.026L111.412 0h29.434v39.696c29.733 16.337 49.918 48.2 49.918 84.829 0 53.279-42.704 96.473-95.382 96.473-16.079 0-31.229-4.024-44.519-11.132l6.712-13.875c11.262 6.107 24.134 9.571 37.807 9.571 44.249 0 80.121-36.282 80.121-81.037 0-27.971-14.013-52.633-35.325-67.197v76.695l-26.897-25.442V50.453l-33.218 78.891h33.218V116.68l31.141 29.274-32.179 24.705V157.58H68.437l-28.855 65.189-35.708-.699z"
          />
        </g>
      </svg>
        </div>
    );
}
 
export default Logo;