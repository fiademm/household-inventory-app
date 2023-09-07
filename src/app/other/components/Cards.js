import { async } from 'q';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoriesCard = ({ index, id, title, description }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newTitle, setTitle] = useState(title);
    const [newDescription, setDescription] = useState(description);

    function openDialog() {
        setModalIsOpen(true);
    }

    function closeDialog() {
        setModalIsOpen(false);
    }

    const handleUpdate = () => { 
       
        return true;
    };

    const handleValidation = () => {
        if (newTitle.length === 0 || newDescription.length === 0) {
            toast.error('All fields are required.');
        } else {
            handleUpdate();
        }
    }

    return (
        <>
            <div onClick={openDialog} className="custom-card-1 category-card">
                <span style={{ textAlign: 'center', width: '5%' }}>{index}</span>
                <span style={{ width: '25%' }}>{title}</span>
                <span style={{ width: '70%' }}>{description}</span>
            </div>
            <ReactModal closeTimeoutMS={500} isOpen={modalIsOpen} onRequestClose={closeDialog}>
                <section className="content">
                    <span className="form-container-2">
                        <span className='update-heading'>Update Record </span>
                        <span className="form-inputs-container-2">
                            <span className="form-elements-2">
                                <label htmlFor="" className="input-label-2">Title:</label>
                                <input type="text" className="input-element-2" value={newTitle} onChange={(event) => setTitle(event.target.value)} />
                            </span>
                            <span className="form-elements-2">
                                <label htmlFor="" className="input-label-2">Description:</label>
                                <textarea type="text" cols="30" rows="10" className="input-element-2" value={newDescription} onChange={(event) => setDescription(event.target.value)} />
                            </span>
                        </span>
                        <button className="login-button" onClick={handleValidation}>Update record</button>
                    </span>
                </section>
            </ReactModal>
            <ToastContainer />
        </>
    );
};

const DashboardCard = () => {
    return (
        <></>
    );
};

const HelpCard = () => {
    return (
        <></>
    );
};

const ProductsCard = () => {
    return (
        <></>
    );
};

const ReportsCard = () => {
    return (
        <></>
    );
};

const SettingsCard = () => {
    return (
        <></>
    );
};

const TransactionsCard = () => {
    return (
        <></>
    );
};

const UsersCard = () => {
    return (
        <></>
    );
};


export { CategoriesCard, DashboardCard, HelpCard, ProductsCard, ReportsCard, SettingsCard, TransactionsCard, UsersCard };