import React from 'react';
import { CompactedSidebar } from '../components/Sidebars';
import { ViewProducts } from '../components/Products';

const Products = () => {
    return (
        <>
            <div className="main-component-container">
                <CompactedSidebar />

                <ViewProducts />
            </div>
        </>
    );
};

export default Products;