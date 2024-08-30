import React from 'react';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard'; // Pastikan nama file dan nama komponen ini sesuai dengan yang sebenarnya

// Import images
import Img1 from '../../assets/product/p-1.jpg';
import Img2 from '../../assets/product/p-2.jpg';
import Img3 from '../../assets/product/p-3.jpg';
import Img4 from '../../assets/product/p-4.jpg';

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Boat Headphone",
        price: "120.000",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Rocky Mountain",
        price: "420.000",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        price: "320.000",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed",
        price: "220.000",
        aosDelay: "600",
    },
    {
        id: 1,
        img: Img1,
        title: "Boat Headphone",
        price: "500.000",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Rocky Mountain",
        price: "120.000",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        price: "300.000",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed",
        price: "220.000",
        aosDelay: "600",
    },
];

const Products = () => {
    return (
        <div>
            <div className='container'>
                {/* Header section */}
                <Heading title="Our Products" subtitle={"Explore Our Products"} />
                {/* Body section */}
                <ProductCard data={ProductsData} />
            </div>
        </div>
    );
};

export default Products;
