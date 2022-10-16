import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faGooglePlus, faLinkedin, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { colleges } from '../Data';

const Footer = () => {
    library.add(fab);
    return (
        <footer className="footer__container">
            <div className="footer__element__container">
                <div className="footer__element">
                    <p>USEFUL LINKS</p>
                    <ul>
                        <li>
                            <Link className="nav__link"   href="/">Office of Prime minister</Link>
                        </li> 
                        <li>
                            <Link className="nav__link" href="/">Office of Prime minister</Link>
                        </li> 
                        <li>
                            <Link className="nav__link" href="/">Office of Prime minister</Link>
                        </li> 
                        <li>
                            <Link className="nav__link" href="/">Office of Prime minister</Link>
                        </li> 
                    </ul>
                </div>
                <div className="footer__element">
                    <p>USEFUL LINKS</p>
                    <ul>
                        <li>
                            <Link className="nav__link" href="/">Office of Prime minister</Link>
                        </li> 
                        <li>
                            <Link className="nav__link" href="/">Office of Prime minister</Link>
                        </li> 
                        <li>
                            <Link className="nav__link" href="/">Office of Prime minister</Link>
                        </li> 
                        <li>
                            <Link className="nav__link" href="/">Office of Prime minister</Link>
                        </li> 
                    </ul>
                </div>
                <div className="footer__element">
                    <p>USEFUL LINKS</p>
                    <ul>
                        <li>
                            <Link className="nav__link" href="/">Office of Prime minister</Link>
                        </li> 
                        <li>
                            <Link className="nav__link" href="/">Office of Prime minister</Link>
                        </li> 
                        <li>
                            <Link className="nav__link" href="/">Office of Prime minister</Link>
                        </li> 
                        <li>
                            <Link className="nav__link" href="/">Office of Prime minister</Link>
                        </li> 
                    </ul>
                </div>
                <div className="footer__element">
                    <p>CONTACT & MAILING ADDRESS</p>
                    <ul>
                        <li>
                            <Link className="nav__link" href="/">Postal Code: {colleges.footerInfos.postal__code}</Link>
                        </li> 
                        <li>
                            <a className="nav__link" href="tel:+8801303501469">Phone:  {colleges.footerInfos.phone}</a>
                        </li> 
                        <li>
                            <a className="nav__link" href="mailto:mddsohidulislam@gmail.com">Email:  {colleges.footerInfos.email}</a>
                        </li> 
                        <li>
                            <Link className="nav__link" href="/">Address:  {colleges.footerInfos.address}</Link>
                        </li> 
                        <li className="logo__container">   
                            <FontAwesomeIcon className='footer__logo' icon={faFacebook}/>
                            <FontAwesomeIcon className='footer__logo' icon={faTwitterSquare}/>
                            <FontAwesomeIcon className='footer__logo' icon={faYoutubeSquare}/>
                            <FontAwesomeIcon className='footer__logo' icon={faLinkedin}/>
                            <FontAwesomeIcon className='footer__logo' icon={faGooglePlus}/>
                        </li> 
                    </ul>
                </div>
            </div>
            <div className="footer__bottom__container">
                <p>Copyright © {new Date().getFullYear()} | {colleges.footerInfos.name} | All Rights Reserved</p> <p className='developer'><Link className="nav__link " href="/">develop by DVIT</Link></p>
            </div>
        </footer>
    );
};

export default Footer;