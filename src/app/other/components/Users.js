import React, { useState } from 'react'
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { UsersCardList } from './CardsList';

const ViewUsers = () => {
    const [showViewUser, setShowViewUser] = useState(true);

    const handleScreenToggle = () => {
        setShowViewUser(!showViewUser);
    };

    const users = [
        {
            id: 1,
            name: 'Ogbee Richard',
            email: 'ogbeerichard@email.com',
            role: 'Administrator',
            password: 'admin2047'
        },
        {
            id: 2,
            name: 'CJ Oppong',
            email: 'cjoppong@email.com',
            role: 'Administrator',
            password: 'admin2047'
        },
        {
            id: 3,
            name: 'Jerry John',
            email: 'jerryjohn@email.com',
            role: 'Administrator',
            password: 'admin2047'
        },
    ];

    return (
        <>
            {showViewUser ? (
                <section className='main-screen'>
                    <Header title='View users' route1='Create user' toggle={handleScreenToggle} />

                    <section className="content">
                        <div className="view-container">
                            <UsersCardList users={users} />
                        </div>
                    </section>
                </section>
            ) : (
                <CreateUser />
            )}
        </>
    );
};

const CreateUser = () => {
    const [showViewUser, setShowViewUser] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleScreenToggle = () => {
        setShowViewUser(!showViewUser);
    };

    const handleValidation = () => {
        // eslint-disable-next-line no-useless-escape
        var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

        if (name === '') {
            toast.error("Name is required.");
            return false;
        } else if (!email.match(reEmail)) {
            toast.error("Incorrect email address format.");
            return false;
        } else if (role === '') {
            toast.error("Role is required.");
            return false;
        } else if (password === '') {
            toast.error("Password is required.");
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
            {showViewUser ? (
                <ViewUsers />
            ) : (
                <section className='main-screen'>
                    <Header title='Create user' route1='View users' toggle={handleScreenToggle} />

                    <section className="content">
                        <span className="form-container-2">
                            <span className="form-inputs-container-2">
                                <span className="form-elements-2">
                                    <label htmlFor="" className="input-label-2">Name:</label>
                                    <input type="text" className="input-element-2" value={name} onChange={(event) => setName(event.target.value)} />
                                </span>
                                <span className="form-elements-2">
                                    <label htmlFor="" className="input-label-2">Email address:</label>
                                    <input type="email" className="input-element-2" value={email} onChange={(event) => setEmail(event.target.value)} />
                                </span>
                                <span className="form-elements-2">
                                    <label htmlFor="" className="input-label-2">Role:</label>
                                    <input type="text" className="input-element-2" value={role} onChange={(event) => setRole(event.target.value)} />
                                </span>
                                <span className="form-elements-2">
                                    <label htmlFor="" className="input-label-2">Password:</label>
                                    <span className="password-input">
                                        <input required className="input-element" type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => setPassword(event.target.value)} />
                                        {showPassword ? (<BsEyeSlash className="password-icon" onClick={handleShowPassword} />) : (<BsEye className="password-icon" onClick={handleShowPassword} />)}
                                    </span>
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

export { CreateUser, ViewUsers };