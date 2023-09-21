import React, { useState } from 'react'
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductsCardList } from './CardsList';

const ViewProducts = () => {
    const [showViewProduct, setShowViewProduct] = useState(true);

    const handleScreenToggle = () => {
        setShowViewProduct(!showViewProduct);
    };

    const products = [
        {
            id: 1,
            barcode: 123456789012,
            name: "<Brand> <Name> <Size> <Color>",
            category: 'Category',
            price: 267123456.52,
            quantity: 10,
            reOrderValue: 5,
            status: 'Available'
        },
        {
            id: 2,
            barcode: 123456789012,
            name: "<Brand> <Name> <Size> <Color>",
            category: 'Category',
            price: 2.50,
            quantity: 10,
            reOrderValue: 5,
            status: 'Available'
        },
        {
            id: 3,
            barcode: 123456789012,
            name: "<Brand> <Name> <Size> <Color>",
            category: 'Category',
            price: 2.50,
            quantity: 10,
            reOrderValue: 5,
            status: 'Reorder'
        },
        {
            id: 4,
            barcode: 123456789012,
            name: "<Brand> <Name> <Size> <Color>",
            category: 'Category',
            price: 267123456.52,
            quantity: 10,
            reOrderValue: 5,
            status: 'Reorder'
        },
        {
            id: 5,
            barcode: 123456789012,
            name: "<Brand> <Name> <Size> <Color>",
            category: 'Category',
            price: 2.50,
            quantity: 10,
            reOrderValue: 5,
            status: 'Available'
        },
        {
            id: 6,
            barcode: 123456789012,
            name: "<Brand> <Name> <Size> <Color>",
            category: 'Category',
            price: 532000.50,
            quantity: 10,
            reOrderValue: 5,
            status: 'Out of stock'
        },
    ]

    return (
        <>
            {showViewProduct ? (
                <section className='main-screen'>
                    <Header title='View products' route1='Create product' toggle={handleScreenToggle} />

                    <section className="content">
                        <div className="view-container">
                            <ProductsCardList products={products} />
                        </div>
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
    const [barcode, setBarcode] = useState();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [reOrderValue, setReordervalue] = useState();
    const [status, setStatus] = useState('');

    const handleScreenToggle = () => {
        setShowViewProduct(!showViewProduct);
    };

    const handleValidation = () => {
        if (barcode === '' || name === '' || category === '' || price === '' || quantity === '' || reOrderValue === '' || status === '' ) {
            toast.error('All fields are required.')
            return false;
        } else {
            return true;
        }
    }

    const handleSave = () => {
        handleValidation();

        if (handleValidation() === true) {
            try {
                toast.success('Record added successfully.')
            } catch (error) {
                toast.error('Error adding record.')
            }
        }
    }

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