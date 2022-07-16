import {AiOutlineCopyrightCircle,AiFillLinkedin,AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import './index.css'

const Footer = () =>(
    <div className='footer'>
        <h2 className='footer-header'>Contact Me</h2>
        <div className='contact-items'>
            <div className='footer-conatct-item'>
                <AiFillPhone className='contact-icon'/>
                <p className='phone'>+91 8247847426</p>
            </div>
            <div className='footer-conatct-item'>
                <MdEmail className='contact-icon'/>
                <p><a href="https://www.outlook.com" className='linkedin'>boyaprasad05@outlook.com</a></p>
            </div>
            <div className='footer-conatct-item'>
                <AiFillLinkedin className='contact-icon'/>
                <p><a href="https://www.linkedin.com/in/prasad-boye/" className='linkedin'>LinkedIn</a></p>
            </div>
        </div>
        <hr color="#aaaaaa"/>
        <div className='copyright'>
            <AiOutlineCopyrightCircle className='contact-icon'/>
            <p>Designed By Prasad Boye</p>
        </div>
    </div>
)

export default Footer