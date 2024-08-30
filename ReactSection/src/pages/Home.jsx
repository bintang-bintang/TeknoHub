import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Category2 from "../components/Category/Category2";

import Products from "../components/Products/Products";
import Services from "../components/Services/Services";

import Banner from "../components/Banner/Banner"
import headphone from "../assets/hero/headphone.png";



const BannerData = {
    discount: "30% OFF",
    title: "Fine Smile slalus",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bgColor: "#f42c37",
};
const BannerData2 = {
    discount: "30% OFF",
    title: "JJ Rimex",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bgColor: "#f42c37",
};


const Home = () => {
    return (
        <>
            <Hero />
            <Category />
            <Category2 />
            <Banner data={BannerData} />
            <Products />
            <Services />
            <Banner data={BannerData2} />
        </>
    )
}

export default Home
