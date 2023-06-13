import React from 'react';
import headerLogo from '../public/assets/header-logo.svg';
import youtube from '../public/assets/youtube-icon.svg';
import instagram from '../public/assets/instagram-icon.svg';
import behance from '../public/assets/be-icon.svg';
import linkedin from '../public/assets/linkedin-icon.svg';

const Header = () => {
    return (
        <header className="header">
            <img
                src={headerLogo}
                alt="Rast Mobile"
                className="header__logo"
            />
            <div className="header__links">
                <a href="#about" className="header__links__title">
                    Hakkımızda
                </a>
                <a href="#competition" className="header__links__title">
                    Jüri - Yarışma Yazılımı
                </a>
                <a href="#ninja" className="header__links__title">
                    Word Ninja
                </a>
                <a href="#pyramdis" className="header__links__title">
                    Word Pyramids
                </a>
            </div>
            <div className="header__social-media">
                <a href="#youtube" className="header__social-media__icon">
                    <img
                        src={youtube}
                        alt="YouTube"
                    />
                </a>
                <a
                    href="https://www.instagram.com/mobilerast/"
                    target="_blank"
                    className="header__social-media__icon"
                    rel="noreferrer"
                >
                    <img
                        src={instagram}
                        alt="Instagram"
                    />
                </a>
                <a
                    href="https://www.behance.net/rastmobile"
                    target="_blank"
                    className="header__social-media__icon"
                    rel="noreferrer"
                >
                    <img
                        src={behance}
                        alt="Behance"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/company/rastmobile/"
                    target="_blank"
                    className="header__social-media__icon"
                    rel="noreferrer"
                >
                    <img
                        src={linkedin}
                        alt="LinkedIn"
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
