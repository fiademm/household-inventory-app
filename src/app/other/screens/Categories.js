import React from 'react';
import { CompactedSidebar } from '../components/Sidebars';
import { ViewCategories } from '../components/Categories';

const Categories = () => {
    return (
        <>
            <div className="main-component-container">
                <CompactedSidebar />
                
                <ViewCategories />
            </div>
        </>
    );
};

export default Categories;