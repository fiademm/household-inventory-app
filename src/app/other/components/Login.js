import React, { useState } from 'react';
import { ReactComponent as Illustration } from '../../../illustrations/Spreadsheets-amico.svg';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleValidation = () => {
        var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

        if (!email.match(reEmail)) {
            toast.error("Incorrect email address format.");
            return false;
        }

        if (password === '') {
            toast.error("Password is required.");
            return false;
        }
    }

    const handleSubmit = async () => {
        handleValidation();
        if (handleValidation) {
            try {
                toast.success('Logged in successfully');
                localStorage.setItem("basketEmail", email); //store user id to local storage
                
                setTimeout(() => {
                    window.location.href = '/Dashboard'; // redirect the user to the specified route
                }, 2000);
            } catch (error) {
                toast.error('Invalid email or password');
            }
        }
    }

    return (
        <>
            <div className="main-component-container">
                <section className="left">
                    <span className="logo-text-large">BASKETS</span>

                    <span className='login-form-container'>
                        <span>
                            <p className='welcome-text'>You're welcome</p>
                            <p className='subtitle-text'>Please enter your details</p>
                        </span>
                        <span className="form-inputs-container">
                            <span className="form-element">
                                <label htmlFor="email" className='input-label'>Email address</label>
                                <input required className="input-element" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </span>
                            <span className="form-element password-element">
                                <label htmlFor="password" className='input-label'>Password</label>
                                <span className="password-input">
                                    <input required className="input-element" type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => setPassword(event.target.value)} />
                                    {showPassword ? (<BsEyeSlash className="password-icon" onClick={handleShowPassword} />) : (<BsEye className="password-icon" onClick={handleShowPassword} />)}
                                </span>
                                {/* <span className="reset-password">Reset password</span> */}
                            </span>
                        </span>
                        <button className="login-button" onClick={handleSubmit}>Login</button>
                        <span className="support-container">
                            <hr />
                            <span>Contact support via <a href="mailto:">baskets@email.com</a></span>
                        </span>
                    </span>

                    <span className="footer-text">Copyright &copy; Baskets 2023. All Rights Reserved.</span>
                    <ToastContainer />
                </section>
                <section className="right">
                    <Illustration className='illustration' />
                </section>
            </div>
        </>
    );
};

export default Login;