import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
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

const ProductsCard = ({ index, id, barcode, name, category, price, quantity, reOrderValue, status }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newName, setName] = useState(name);
    const [newCategory, setCategory] = useState(category);
    const [newPrice, setPrice] = useState(price);
    const [newQuantity, setQuantity] = useState(quantity);
    const [newReOrderValue, setReordervalue] = useState(reOrderValue);

    function openDialog() {
        setModalIsOpen(true);
    }

    function closeDialog() {
        setModalIsOpen(false);
    }

    const handleUpdate = () => {
        // database logic and processes
        return true;
    };

    const handleValidation = () => {
        if (newName.length === 0 || newCategory.length === 0 || newPrice.length === 0 || newQuantity.length === 0 || newReOrderValue.length === 0) {
            toast.error('All fields are required.');
        } else {
            handleUpdate();
        }
    }

    return (
        <>
            <div onClick={openDialog} className="custom-card-1 category-card">
                <span style={{ textAlign: 'center', width: '5%' }}>{index}</span>
                <span style={{ textAlign: 'left', width: '10%' }}>{barcode}</span>
                <span style={{ textAlign: 'left', width: '34%' }}>{name}</span>
                <span style={{ textAlign: 'left', width: '25%' }}>{category}</span>
                <span style={{ textAlign: 'left', width: '10%' }}>{price}</span>
                <span style={{ textAlign: 'left', width: '8%', textAlign: 'center' }}>{quantity}</span>
                <span style={{ textAlign: 'left', width: '8%' }}>{status}</span>
            </div>

            <ReactModal closeTimeoutMS={500} isOpen={modalIsOpen} onRequestClose={closeDialog} >
                <section className="content">
                    <span className="form-container-2">
                        <span className='update-heading'>Update Record </span>
                        <span className="form-inputs-container-2">
                            <span className="form-elements-2">
                                <label htmlFor="" className="input-label-2">Name:</label>
                                <input type="text" className="input-element-2" value={newName} onChange={(event) => setName(event.target.value)} />
                            </span>
                            <span className="form-elements-2">
                                <label htmlFor="" className="input-label-2">Category:</label>
                                <input type="email" className="input-element-2" value={newCategory} onChange={(event) => setCategory(event.target.value)} />
                            </span>
                            <span className="form-elements-2">
                                <label htmlFor="" className="input-label-2">Price:</label>
                                <input type="number" className="input-element-2" value={newPrice} onChange={(event) => setPrice(event.target.value)} />
                            </span>
                            <span className="form-elements-2">
                                <label htmlFor="" className="input-label-2">Quantity:</label>
                                <input type="number" className="input-element-2" value={newQuantity} onChange={(event) => setQuantity(event.target.value)} />
                            </span>
                            <span className="form-elements-2">
                                <label htmlFor="" className="input-label-2">Reorder Value:</label>
                                <input type='number' className="input-element-2" value={newReOrderValue} onChange={(event) => setReordervalue(event.target.value)} />
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

const UsersCard = ({ index, id, name, email, role, password }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newName, setName] = useState(name);
    const [newEmail, setEmail] = useState(email);
    const [newRole, setRole] = useState(role);
    const [newPassword, setPassword] = useState(password);
    const [showPassword, setShowPassword] = useState(false);


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
        if (newName.length === 0 || newEmail.length === 0 || newRole.length === 0 || newPassword.length === 0) {
            toast.error('All fields are required.');
        } else {
            handleUpdate();
        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div onClick={openDialog} className="custom-card-1 category-card">
                <span style={{ textAlign: 'center', width: '5%' }}>{index}</span>
                <span style={{ textAlign: 'left', width: '25%' }}>{name}</span>
                <span style={{ textAlign: 'left', width: '35%' }}>{email}</span>
                <span style={{ textAlign: 'left', width: '15%' }}>{role}</span>
                <span style={{ textAlign: 'left', width: '25%' }}>{password}</span>
            </div>

            <ReactModal closeTimeoutMS={500} isOpen={modalIsOpen} onRequestClose={closeDialog} >
                <section className="content">
                    <span className="form-container-2">
                        <span className='update-heading'>Update Record </span>                    <span className="form-inputs-container-2">
                            <span className="form-elements-2">
                                <label htmlFor="" className="input-label-2">Name:</label>
                                <input type="text" className="input-element-2" value={newName} onChange={(event) => setName(event.target.value)} />
                            </span>
                            <span className="form-elements-2">
                                <label htmlFor="" className="input-label-2">Email address:</label>
                                <input type="email" className="input-element-2" value={newEmail} onChange={(event) => setEmail(event.target.value)} />
                            </span>
                            <span className="form-elements-2">
                                <label htmlFor="" className="input-label-2">Role:</label>
                                <input type="text" className="input-element-2" value={newRole} onChange={(event) => setRole(event.target.value)} />
                            </span>
                            <span className="form-elements-2">
                                <label htmlFor="" className="input-label-2">Password:</label>
                                <span className="password-input">
                                    <input required className="input-element" type={showPassword ? 'text' : 'password'} value={newPassword} onChange={(event) => setPassword(event.target.value)} />
                                    {showPassword ? (<BsEyeSlash className="password-icon" onClick={handleShowPassword} />) : (<BsEye className="password-icon" onClick={handleShowPassword} />)}
                                </span>
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


export { CategoriesCard, DashboardCard, HelpCard, ProductsCard, ReportsCard, SettingsCard, TransactionsCard, UsersCard };