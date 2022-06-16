import React from 'react';
import './Navbar.css';
import {IoLanguageSharp} from 'react-icons/io5';

const Navbar = () => {
    return (
        <>
        <body>
        <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand"></a>
             <h1 id="bgwhite" class="profile"> Profile</h1>
             <IoLanguageSharp size={30} class="language"/>
        </nav>
        </body>
        </>
      );
}
 
export default Navbar;