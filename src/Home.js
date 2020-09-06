import React from 'react';
import "./Home.css";
import Product from "./Product.js";

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            >

            </img>
            <div className="home__row">
                <Product 
                    id={12345}
                    title="Apple MPDL2LL/A 13in MacBook Pro, Retina, Touch Bar, 3.3GHz Intel i7 Dual Core, 16GB RAM, 512GB PCIe SSD, Intel Iris 550, Silver (Renewed)"
                    price={995.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61DjtpWIkWL._AC_UY218_.jpg"
                ></Product>

                <Product 
                    id={1234}
                    title="Asus ROG STRIX GeForce RTX 2080TI Overclocked 11G GDDR6 HDMI DP 1.4 USB Type-C Gaming Graphics Card (ROG-STRIX-RTX-2080TI-O11G)"
                    price={752.44}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/91Qg5K-cmfL._AC_UY218_.jpg"
                ></Product>
            </div>
            <div className="home__row">
                <Product 
                    id={1232421}
                    title="Malcolm Gladwell: Outliers : The Story of Success (Large Print Hardcover); 2008 Edition"
                    price={24.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41uvQ6ytbkL._SY445_QL70_ML2_.jpg"
                ></Product>

                <Product 
                    id={123424}
                    title="Ninja Specialty Coffee Maker, with 50 Oz. Glass Carafe, Black and Stainless Steel Finish"
                    price={149.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81Qe6lgkYVL._AC_UY218_.jpg"
                ></Product>

                <Product 
                    id={123422}
                    title="Sennheiser RS 175 RF Wireless Headphone System"
                    price={137.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71wj3iAdCbL._AC_UY218_.jpg"
                ></Product>
            </div>
            <div className="home__row">
            <Product 
                    id={123456}
                    title="Fixer Bike Road Bike Fixed Gear Alumium Alloy Urban Bike Flip Flop Hub City Bike Riser Bar 700c 54cm Single Speed"
                    price={245.55}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61DepJEsReL._AC_UL320_.jpg"
                ></Product>
            </div>
        </div>
    )
}

export default Home
