import React from 'react'
import Link from 'next/link';
import '../styles/header.css';
const Header = () => {
  return (
    <div className="header">
             {/* left */}
               <div>
                <h1>My Website</h1>
                 </div>
                {/* right */}
                 <div className="header-right-div">
                    <ul className="header-links">
                        <li>
                            <Link className="nav-links" href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link className="nav-links" href={"/about"}>About</Link>
                        </li>
                         <li>
                            <Link className="nav-links" href={"/service"}>Service</Link>
                         </li>
                         <li>
                            <Link className="nav-links" href={"/contact"}>Contact</Link>
                         </li>
                    </ul>
                    
                 </div>
          </div>
  

  );
}

export default Header