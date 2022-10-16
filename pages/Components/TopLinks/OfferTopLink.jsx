import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const OfferTopLink = ({infos}) => { 
    let {offer}  = infos;
    return (
        <div className='category__or__product__link__container'>
        <Link to='/' className='body__header__middle__Link'>Home</Link>
        <FontAwesomeIcon className='body__header__middle__arrow' icon={faAnglesRight}/> 
        <Link to={`/allOffers`} className='body__header__middle__Link'>Offers</Link>
        <FontAwesomeIcon className='body__header__middle__arrow' icon={faAnglesRight}/> 
        <Link to={`/allOffers/${offer}`} className='body__header__middle__Link'>{offer}</Link> 
    </div>
    );
};

export default OfferTopLink;