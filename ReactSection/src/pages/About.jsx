import React from 'react'
import Heading from '../components/Shared/Heading';
import Blog from '../assets/blogs/blog-1.jpg';

const About = () => {
  return (
    <div className="py-10">
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left">
                    <h1 className="text-3xl font-semibold bg-clip-text 
                    from-dark font-poppins">Tekno Hub</h1>
                    <p className="text-sm text-dark font-sans">
                    TeknoHub merupakan online retail SmartPhone, Tablet,IOT
                    <br/> dan aksesoris pendukungnya, Kami memberikan pengalaman
                    <br/>Belanja online yang aman dan nyaman, beserta jaminan 
                    <br/> orisinalitas dan generasi resmi untuk berbagi merek ternama
                    <br/> seperti Apple, Samsung, Xiaomi, Oppo, Vivo, Realme, Huawei 
                    <br/>dan ratusan merek favorit lainnya
                        </p>
                </div>
                {/* about Image Section */}
                <div className="min-h-[350px] flex justify-center items-center relative order-1 sm:order-2">
                    <img src={Blog} className="max-w-[350px] w-full mx-auto sm:scale-125 shadow-l "/>
                    
                </div>
            </div>
        </div>
      </div>
      );
    };
  

export default About;