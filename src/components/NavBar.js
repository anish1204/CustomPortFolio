// Navbar.js
import React, { useEffect, useState } from 'react';
import '../components/NavBar.css'; // Import your CSS file for styling
import CompanyLogo from '../images/CompanyLogo.png';
import menu from '../images/menu.png';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const HandleNavBar = () => {
        console.log('Clicked');
        setIsOpen(!isOpen);
    }


    return (
        <div>
            <div className='outer-container'>
                <div className='container'>
                    <div className='company-logo'>
                        <img src={CompanyLogo} />
                    </div>
                    <div className='Options'>
                        <img src={menu} height={50} width={50} onClick={HandleNavBar} />
                    </div>
                    <div className='author-social'>
                        <label>+</label>
                    </div>
                </div>
                <div style={{ display: isOpen ? "block" : "none" }} className='container-items'>
                    <div className='all-options'>
                        <div id='startOption' className='Options-heading'>
                            <h2><a>Home</a></h2>
                            <div className='additional-options'>
                               <button>+</button> 
                            </div>
                        </div>
                        <div className='Options-heading'>
                            <h2>Services</h2>
                        </div>
                        <div className='Options-heading'>
                            <h2>Blog</h2>
                        </div>
                        <div className='Options-heading'>
                            <h2>About</h2>
                        </div>
                        <div className='Options-heading'>
                            <h2>Contact Us</h2>
                        </div>
                    </div>


                </div>
            </div>


        </div>

    );
};

export default Navbar;


// <div className={`main-navbar ${optionVal ? 'open' : 'close'}`}>
//                 <div className='nav-wrapper'>

//                     <div className='side-nav-menu'>
//                         <img src={CompanyLogo} height={60} />
//                     </div>
//                 </div>

//                 <div className='container'>
//                     <div className='nav-side'>
//                         <div className='side-navbar'>

//                             <div className='nav-toggle'>
//                                 <img src={menu} height={30} onClick={HandleNavBar} width={30} color='white' />

//                             </div>

//                         </div>
//                     </div>
//                 </div>
//                 <div class="author-social">
//                     <label>+</label>
//                 </div>

//             </div>
//             {
//                 !setOptionsVal ? (
//                     <div className='Options-Navbar'>
//                         hi
//                     </div>
//                 ) : null
//             } 