import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faGooglePlus, faLinkedin, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { uid } from 'uid'; 
import { colleges } from '../../utils/database/Data';

const Footer = () => { 

    const handleClickUuid = (data) => {
        console.log(data);
    }

    return (
        <footer className="footer__container">
            <div className="footer__element__container">
                <div className="footer__element">
                    <p>USEFUL LINKS</p>
                    <ul>
                        <li>
                            <p className="nav__link"   onClick={()=>handleClickUuid(14)}>Demo Link Name </p>
                        </li> 
                        <li>
                            <p className="nav__link"   onClick={()=>handleClickUuid(11)}>Demo Link Name </p>
                        </li> 
                        <li>
                            <p className="nav__link"   onClick={()=>handleClickUuid(10)}>Demo Link Name </p>
                        </li> 
                        <li>
                            <p className="nav__link"   onClick={()=>handleClickUuid(12)}>Demo Link Name </p>
                        </li> 
                    </ul>
                </div>
                <div className="footer__element">
                    <p>USEFUL LINKS</p>
                    <ul>
                        <li>
                            <p className="nav__link"   onClick={()=>handleClickUuid(15)}>Demo Link Name </p>
                        </li> 
                        <li>
                            <p className="nav__link"   onClick={()=>handleClickUuid(13)}>Demo Link Name </p>
                        </li> 
                        <li>
                            <p className="nav__link"   onClick={()=>handleClickUuid(16)}>Demo Link Name </p>
                        </li> 
                        <li>
                            <p className="nav__link"   onClick={()=>handleClickUuid(17)}>Demo Link Name </p>
                        </li> 
                    </ul>
                </div>
                <div className="footer__element">
                    <p>USEFUL LINKS</p>
                    <ul>
                        <li>
                            <p className="nav__link"   onClick={()=>handleClickUuid(18)}>Demo Link Name </p>
                        </li> 
                        <li>
                            <p className="nav__link"   onClick={()=>handleClickUuid(19)}>Demo Link Name </p>
                        </li> 
                        <li>
                            <p className="nav__link"   onClick={()=>handleClickUuid(20)}>Demo Link Name </p>
                        </li> 
                        <li>
                            <p className="nav__link"   onClick={()=>handleClickUuid(21)}>Demo Link Name </p>
                        </li> 
                    </ul>
                </div>
                <div className="footer__element">
                    <p>CONTACT & MAILING ADDRESS</p>
                    <ul>
                        <li>
                            <p className="nav__link"   onClick={()=>handleClickUuid(22)}>Postal Code: {colleges.footerInfos.postal__code}</p>
                        </li> 
                        <li>
                            <a className="nav__link" href="tel:+8801303501469">Phone:  {colleges.footerInfos.phone}</a>
                        </li> 
                        <li>
                            <a className="nav__link" href="mailto:mddsohidulislam@gmail.com">Email:  {colleges.footerInfos.email}</a>
                        </li> 
                        <li>
                            <p className="nav__link"   onClick={()=>handleClickUuid(23)}>Address:  {colleges.footerInfos.address}</p>
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
                <p>Copyright © {new Date().getFullYear()} | {colleges.footerInfos.name} | All Rights Reserved</p> <p className='developer'><p className="nav__link "   onClick={()=>handleClickUuid(23)}>develop by DVIT</p></p>
            </div>
        </footer>
    );
};

export default Footer;

// import React from 'react';

// const Footer = () => {
//     return (
//         <div>
//             <h1>Hello world</h1>
//         </div>
//     );
// };

// export default Footer;