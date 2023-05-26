import React from 'react';
import Banner from '../Banner/Banner';
import BannerCard from '../Banner/BannerCard';
import Gallery from '../Gallery/Gallery';
import PageTitle from '../PageTitle/PageTitle';
import ShopCategory from '../ShopCategory/ShopCategory';
import ContactUs from '../ContactUs/ContactUs';
import BestToys from '../BestToys/BestToys';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home" />
           <Banner></Banner>
           <BannerCard></BannerCard>
           <Gallery></Gallery>
           <ShopCategory></ShopCategory>
           <BestToys></BestToys>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;