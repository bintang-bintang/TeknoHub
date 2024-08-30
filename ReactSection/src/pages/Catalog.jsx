import React from 'react';
import Products from '../components/Products/Products';
// import Products from './path/to/Products'; // Sesuaikan dengan lokasi file Products

const Catalog = () => {
    return (
        <div className='container'>
                <div class="text-center font-bold font-lg">Selamat datang di catalog</div>
            <Products />
            {/* <Products /> Panggil komponen Products di sini */}
        </div>
    );
};

export default Catalog;