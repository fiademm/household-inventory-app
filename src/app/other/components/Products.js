import React, { useState } from 'react'
import Header from '../components/Header';

const ViewProducts = () => {
    const [showViewProduct, setShowViewProduct] = useState(true);

    const handleScreenToggle = () => {
        setShowViewProduct(!showViewProduct);
    };

    return (
        <>
            {showViewProduct ? (
                <section className='main-screen'>
                    <Header title='View products' route1='Create product' toggle={handleScreenToggle} />

                    <section className="content">
                        View Products
                    </section>
                </section>
            ) : (
                <CreateProduct />
            )}
        </>
    );
};

const CreateProduct = () => {
    const [showViewProduct, setShowViewProduct] = useState(false);

    const handleScreenToggle = () => {
        setShowViewProduct(!showViewProduct);
    };

    return (
        <>
            {showViewProduct ? (
                <ViewProducts />
            ) : (
                <section className='main-screen'>
                    <Header title='Create product' route1='View products' toggle={handleScreenToggle} />

                    <section className="content">
                        Create Product
                    </section>
                </section>
            )}
        </>
    );
};

export { CreateProduct, ViewProducts };