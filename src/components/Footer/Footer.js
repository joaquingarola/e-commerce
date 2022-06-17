import './Footer.css';
import { AiFillLinkedin, AiFillFacebook, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return(
    <div className='footer-container'>
      <div className='right-container'>
        Copyright © 2022
      </div>
      <div className='icon-container'>
        <a target='_blank' rel='noreferrer' href='https://www.facebook.com'> <AiFillFacebook className='icon' /> </a>
        <a target='_blank' rel='noreferrer' href='https://www.instagram.com'> <AiFillInstagram className='icon'/> </a>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com'> <AiFillLinkedin className='icon'/> </a>
        <a target='_blank' rel='noreferrer' href='https://github.com/joaquingarola'> <AiFillGithub className='icon' /> </a>
      </div>
    </div>
  );
};

export default Footer;