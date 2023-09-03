import React, { useState } from 'react'
import Header from '../components/Header';

const ViewUsers = () => {
    const [showViewUser, setShowViewUser] = useState(true);

    const handleScreenToggle = () => {
        setShowViewUser(!showViewUser);
    };

    return (
        <>
            {showViewUser ? (
                <section className='main-screen'>
                    <Header title='View users' route1='Create user' toggle={handleScreenToggle} />

                    <section className="content">
                        View Users
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

    const handleScreenToggle = () => {
        setShowViewUser(!showViewUser);
    };

    return (
        <>
            {showViewUser ? (
                <ViewUsers />
            ) : (
                <section className='main-screen'>
                    <Header title='Create user' route1='View users' toggle={handleScreenToggle} />

                    <section className="content">
                        Create User
                    </section>
                </section>
            )}
        </>
    );
};

export { CreateUser, ViewUsers };