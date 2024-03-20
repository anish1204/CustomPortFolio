import React from 'react'
import '../components/FrontPage.css'
import ProfilePhoto from '../assets/img/illustration/5.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import AbcIcon from '@mui/icons-material/Abc';
import NavBar from './NavBar';

const FrontPage = () => {
  return (
    <div className='main'>
        <div className='main-content'>
            <div className='main-intro'>
              <div className='head-intro'>
                <p>Hey,I'm <br></br>Richard Brian</p>
                <p>Senior Web Developer</p>
                <button className='front-button'>Hire Me Now</button>
                <button className="back-button"></button>

              </div>
            </div>
            <div className='User-Profile'>
              
              <img src={ProfilePhoto}  />
            </div>
            <div className='social-handle'>
            <FacebookRoundedIcon className='SocialIcons'/>
            <SportsBasketballOutlinedIcon className='SocialIcons'/>
            <AbcIcon className='SocialIcons'/>
            {/* <FontAwesomeIcon icon="fa-sharp fa-regular fa-basketball" /> */}
            </div>
        </div>

    </div>
  )
}

export default FrontPage