import React, { useState } from 'react'
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CategoriesCardList } from './CardsList';

const ViewCategories = () => {
    const [showViewCategory, setShowViewCategory] = useState(true);
    
    const handleScreenToggle = () => {
        setShowViewCategory(!showViewCategory);
    };

    const categories = [
        {
            id: 1,
            title: 'Computers & Accessories',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dignissimos sed architecto distinctio, atque ipsa recusandae laboriosam quae rem, quas ad quos explicabo! Labore quo, necessitatibus ipsum delectus consectetur nulla.'
        },
        {
            id: 2,
            title: 'Furniture & Bedroom Stuff Outside',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dignissimos sed architecto distinctio, atque ipsa recusandae laboriosam quae rem, quas ad quos explicabo! Labore quo, necessitatibus ipsum delectus consectetur nulla.'
        },
        {
            id: 3,
            title: 'Furniture',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dignissimos sed architecto distinctio, atque ipsa recusandae laboriosam quae rem, quas ad quos explicabo! Labore quo, necessitatibus ipsum delectus consectetur nulla.'
        },
        {
            id: 4,
            title: 'Furniture',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dignissimos sed architecto distinctio, atque ipsa recusandae laboriosam quae rem, quas ad quos explicabo! Labore quo, necessitatibus ipsum delectus consectetur nulla.'
        }
    ]

    return (
        <>
            {showViewCategory ? (
                <section className='main-screen'>
                    <Header title='View categories' route1='Create category' toggle={handleScreenToggle} />

                    <section className="content">
                        <div className="view-container">
                            <CategoriesCardList categories={categories} />
                        </div>
                    </section>
                </section>
            ) : (
                <CreateCategory />
            )}
        </>
    );
};

const CreateCategory = () => {
    const [showViewCategory, setShowViewCategory] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleScreenToggle = () => {
        setShowViewCategory(!showViewCategory);
    };

    const handleValidation = () => {
        if (title === '' || description === '') {
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
            {showViewCategory ? (
                <ViewCategories />
            ) : (
                <section className='main-screen'>
                    <Header title='Create category' route1='View categories' toggle={handleScreenToggle} />

                    <section className="content">
                        <span className="form-container-2">
                            <span className="form-inputs-container-2">
                                <span className="form-elements-2">
                                    <label htmlFor="" className="input-label-2">Input label:</label>
                                    <input type="text" className="input-element-2" value={title} onChange={(event) => setTitle(event.target.value)} />
                                </span>
                                <span className="form-elements-2">
                                    <label htmlFor="" className="input-label-2">Input label:</label>
                                    <textarea type="text" cols="30" rows="10" className="input-element-2" value={description} onChange={(event) => setDescription(event.target.value)} />
                                </span>
                            </span>
                            <button className="login-button" onClick={handleSave}>Add record</button>
                        </span>
                    </section>
                    <ToastContainer />
                </section>
            )}
        </>
    );
};

export { CreateCategory, ViewCategories };