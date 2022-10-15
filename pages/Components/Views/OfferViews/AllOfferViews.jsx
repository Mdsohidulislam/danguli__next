import { Link } from "react-router-dom";
import { Loading } from "../../Loading/Loading";

const AllOfferViews = () => {
    let brands = ['best__rated', 'everyday__essentials', 'featured__products', 'flash__sale', 'high__light__of__the__week', 'innovated__gadget', 'pre__order', 'recently__added', 'recommended','upgrade__your__gaming__station', 'clearance', 'free__shipping', 'my__deals','work__from__anywhere']
    return (
        <div> 
                        {brands.length? 
            <div>
                {
                    brands.map((info, index) => <Link to={`/allOffers/${info}`} key={index} className="brand__views__button__with__brand__product__quantity">{info.replace(/__/g, ' ')})</Link>  )
                }
                
            </div>: <Loading/>}
        </div>
    );
};

export default AllOfferViews;