import React from 'react'
import '../styles/hero.css';
import Link from 'next/link';
const Hero = () => {
  return (
      <section className="hero">
        <div className="overlay">
         <div className="content">
              <h1>Hello, I,m <span>Sana Nawaz</span></h1>
                    <p>I am a passionate web developer and designer,creating innovative and user-friendly websites.My goal is to transform ideas into reality through code andcreativity.</p>
                    
                
                    
                     
                    <button className=  {"cta-button"}>Know More About Me</button>
                    
                    
                    
                    
              
                   
        </div>
        

        </div>
      </section>
  );
}

export default Hero