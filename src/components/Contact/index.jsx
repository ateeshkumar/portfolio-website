import Loader from "react-loaders";
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import './index.scss';
import AnimatedLetter from "../AnimatedLetter";
import { useEffect,useRef,useState } from "react";
import emailjs from '@emailjs/browser';
import { Marker, Popup } from "react-leaflet";
const Contact = () => {
    const [letterClass,setLetterClass] = useState('text-animate');
    const form = useRef();

    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'gmail',
            'template_8d88pxi',
            form.current,
            'dVQDnaIwV0mGHj7qxOZe-'
        )
        .then(()=>{
            alert("Message Successfully sent!");
            window.location.reload(false);
        },
        ()=>{
            alert("Failed to send message, Please try again!!");
        })
    }

    return ( 
    <>
    <div className="container contact-page">
        <div className="text-zone">
            <h1>
            <AnimatedLetter 
                letterClass={letterClass} 
                strArray={['C','o','n','t','a','c','t',' ','m','e']} 
                idx={15}/>
            </h1>
            <p>I am always excited to work on some awesome projects, message me and let's discuss over coffee.
            </p>
            <p><bold>Email Address: </bold> ateesh2002@gmail.com</p>
            <p><bold>Whatsapp No: </bold> +91 7355763888</p>
            {/* <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div> */}
        </div>
        <div className="info-map">
          Ateesh Kumar,
          <br />
          Chandigarh,
          <br />
          Chandigarh University, Muhali, 140413,
          <br />
          Punjab, India.
          <br />
          <span>ateesh2002@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[24.770875,83.170394]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[24.770875,83.170394]}>
              <Popup>Ateesh lives here, come over for a cup of coffee :)</Popup>
            </Marker>

          </MapContainer>
        </div>
    </div>
    <Loader type="pacman"/>
    </> );
}
 
export default Contact;