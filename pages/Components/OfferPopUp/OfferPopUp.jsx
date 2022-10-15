import axios from "axios";
import { utilsHelper } from "../../UTILS/utils";

const OfferPopUp = ({infos}) => {

    let infosArray = ['best__rated', 'everyday__essentials', 'featured__products', 'flash__sale', 'high__light__of__the__week', 'innovated__gadget', 'pre__order', 'recently__added', 'recommended','upgrade__your__gaming__station', 'clearance', 'free__shipping', 'my__deals','work__from__anywhere']
    
 

    const handleUploadOfferProduct = (offerTable) => {
        
        let {offerProduct} = infos;
        offerProduct.views = 10; 
        offerProduct.post__time = utilsHelper.timeManagements.momentTimeMaker(); 
        axios.post('http://localhost:3009/postSingleOfferProduct',{infos:offerProduct, database: offerTable}).then(res => {
            console.log(res);
            if(res.data.status__code === 200){
                document.querySelector('.popup__container__for__add__or__remove__offer').classList.toggle('active');
            }
        }).catch(err  => {
            console.log(err.message);
        })
    }

    const handleCloseOfferBox = () => {
        document.querySelector('.popup__container__for__add__or__remove__offer').classList.toggle('active');
    }

    return (
        <div className="popup__container__for__add__or__remove__offer">
            {
                infosArray.map((info, index) => {
                    return <button key={index} onClick={()=> handleUploadOfferProduct(info)}>{info.replace(/__/g, ' ')}</button>
                })
            }
            <button style={{backgroundColor: 'tomato'}} onClick={handleCloseOfferBox}>Remove</button>
         
    </div>
    );
};

export default OfferPopUp;