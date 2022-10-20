import TopRowHeaderTitleWithBorder from "../Home/TopRowHeaderTitleWithBorder/TopRowHeaderTitleWithBorder";
import TopRowHeaderTitleWitBorderBottom from "../Home/TopRowHeaderTitleWithBorder/TopRowHeaderTitleWithBorderBottom";

 

const HelpAnywhere = () => {
    return (
        <div className='help__any__where__container'>
            <TopRowHeaderTitleWitBorderBottom infos={{ bgc: '#f0f2f5',  brc: 'none', brr: 10, title: 'Products that help you work from anywhere' , display: 'block', strkbg:'#761bcc'}}/>
            <div className='help__anywhere__container'>
                <div className='item__left any__item'>
                    <img src='/any__where/anywhere__2.jpg' alt='hello world'></img>
                </div>
                <div className='item__right any__item'>
                    <img src='/any__where/anywhere__1.jpg' alt='hello world'></img>
                </div>
            </div>
        </div>
    );
};

export default HelpAnywhere;