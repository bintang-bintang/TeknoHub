// Footer.js
import React from 'react';
import "react-icons/fa"
import { FaInstagram, FaTelegram, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-primary pt-12 pb-8 text-white">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold">TEKNO HUB</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et risus eget augue feugiat dignissim in non mauris. Quisque non nisl velit. Duis tincidunt quis turpis non ultrices. Quisque id egestas eros. Vivamus vestibulum fringilla dui non mattis. </p>
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold">Quick Links</h1>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <ul className="space-y-1">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Menu</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-1">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Menu</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold">Follow Us</h1>
                        <div className="space-y-1">
                            <p>+62 8123 4567 899</p>
                            <p>teknohub@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Your social media icons */}
                            <FaInstagram className="text-3xl hover:scale-105 duration-300" />
                            <FaTiktok className="text-3xl hover:scale-105 duration-300" />
                            <FaTwitter className="text-3xl hover:scale-105 duration-300" />
                            <FaTelegram className="text-3xl hover:scale-105 duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
