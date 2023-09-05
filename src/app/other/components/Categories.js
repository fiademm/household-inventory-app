import React, { useState } from 'react'
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewCategories = () => {
    const [showViewCategory, setShowViewCategory] = useState(true);

    const handleScreenToggle = () => {
        setShowViewCategory(!showViewCategory);
    };

    return (
        <>
            {showViewCategory ? (
                <section className='main-screen'>
                    <Header title='View categories' route1='Create category' toggle={handleScreenToggle} />

                    <section className="content">
                        View Categories
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
                        <span className="form-container-2"></span>
                        <span className="form-inputs-container-2">
                            <span className="form-elements-2">
                                <label htmlFor="" className="input-label-2">Input label:</label>
                                <input type="text" className="input-element-2" value={title} onChange={(event) => setTitle(event.target.value)} />
                            </span>
                            <span className="form-elements-2">
                                <label htmlFor="" className="input-label-2">Input label:</label>
                                <input type="text" className="input-element-2" value={description} onChange={(event) => setDescription(event.target.value)} />
                            </span>
                        </span>
                        <button className="login-button" onClick={handleSave}>Add record</button>
                    </section>
                    <ToastContainer />
                </section>
            )}
        </>
    );
};

export { CreateCategory, ViewCategories };