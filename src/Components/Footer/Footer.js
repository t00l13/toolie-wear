import React from 'react';
import './Footer.css'
import Telegram from '../../images/icons/telegram.svg';
import Figma from '../../images/icons/figma.svg';
import Github from '../../images/icons/github.svg';
import Discord from '../../images/icons/discord.svg';
import FooterLogo from '../../images/FooterLogo.png';

function Footer(props) {
    return (
        <div className='footer'>
            <div className='footer-social__area'>
                <a href='https://t.me/t00l13' target={'_blank'} className='footer-social__link'><img src={Telegram} className='footer__icon'></img></a>
                <a href='https://github.com/t00l13' target={'_blank'} className='footer-social__link'><img src={Github} className='footer__icon'></img></a>
                <a href='https://www.figma.com/file/g7X6jL67OA6GVWMZBngGBc/Toolie-wear?node-id=13%3A752' target={'_blank'} className='footer-social__link'><img src={Figma} className='footer__icon'></img></a>
                <a href='https://discord.gg/dVQC8dxv' target={'_blank'} className='footer-social__link'><img src={Discord} className='footer__icon'></img></a>
            </div>
            <img src={FooterLogo} className='footer__logo'></img>
            <p className='footer__copyright'>Anatoly Borodinov 2022</p>
        </div>
    );
}

export default Footer;