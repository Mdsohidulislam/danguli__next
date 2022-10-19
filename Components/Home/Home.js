import React from 'react';
import BrandsCategories from '../BrandsCategories/BrandsCategories';
import Footer from '../Footer/Footer';
import FooterBanner from '../FooterBanner/FooterBanner';
import HelpFooter from '../FooterBanner/HelpFooter';
import HelpAnywhere from '../HelpAnywhere/HelpAnywhere';
import HomeImageGridView from '../ImageGrid/HomeImageGridView';
import Navbar from '../Navbar/Navbar';
import OwenerFeatures from '../OwenerFeatures/OwenerFeatures';
import PrintHomeBanner from '../PrintHomeBanner/PrintHomeBanner';
import TechSuccess from '../TechSuccess/TechSuccess';
import Carousell from './Carousel/Carousel';
import FeaturedCategories from './FeaturedCategories/FeaturedCategories';
import MoreSave from './MoreSave/MoreSave';
import BestRated from './Promotion/BestRated';
import EverydayE from './Promotion/EverydayE';
import FeaturedProducts from './Promotion/FeaturedProduct';
import HighLOTW from './Promotion/HighLOTW';
import InnovatedGadget from './Promotion/InnovatedGadget';
import PreOrder from './Promotion/PreOrder';
import RecentlyAdded from './Promotion/RecentlyAdded';
import Recommended from './Promotion/Recomended';
import UpgradeUGS from './Promotion/UpgradeUGS';

const Home = () => {
    return (
        <div>
            <Navbar/> 
            <div className='next__home__container'>
                <Carousell/> 
                <UpgradeUGS/> 
                <FeaturedCategories/>
                <EverydayE/>
                <BrandsCategories/>
                <RecentlyAdded/>  
                <OwenerFeatures/>
                <HighLOTW/>
                <Recommended/>
                <MoreSave/>
                <PreOrder/>
                <TechSuccess/>
                <BestRated/>
                <HelpAnywhere/>
                <PrintHomeBanner/>
                <FeaturedProducts/>
                <HomeImageGridView/>
                <InnovatedGadget/>
            </div>
            <FooterBanner/>
            <HelpFooter/>
            <Footer/>
        </div>
    );
};

export default Home;