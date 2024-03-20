import { React, useState } from 'react'
import '../components/Home.css'
import NavBar from './NavBar'
import FrontPage from './FrontPage'





const Home = () => {
    const [navBarOpen, setNavbarOpen] = useState(true);

    const toggleNavBar = () => {
        setNavbarOpen(!navBarOpen);
    }


    return (
        <div className='main-body'>
            
            {/* isOpen={navBarOpen} toggleNavBar={toggleNavBar} */}
            <div className='Navbar'>
            <NavBar/>
            </div>
            <div className='FrontPage'>
            <FrontPage/>
            </div>

            
        </div>
    )
}

export default Home