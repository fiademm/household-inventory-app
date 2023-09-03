import React, { useState } from 'react'
import Header from '../components/Header';

const ViewSettings = () => {
    const [showViewSettings, setShowViewSettings] = useState(true);

    const handleScreenToggle = () => {
        setShowViewSettings(!showViewSettings);
    };

    return (
        <>
            {showViewSettings ? (
                <section className='main-screen'>
                    <Header title='View settings' route1='Create settings' toggle={handleScreenToggle} />

                    <section className="content">
                        View Settings
                    </section>
                </section>
            ) : (
                <CreateSettings />
            )}
        </>
    );
};

const CreateSettings = () => {
    const [showViewSettings, setShowViewSettings] = useState(false);

    const handleScreenToggle = () => {
        setShowViewSettings(!showViewSettings);
    };

    return (
        <>
            {showViewSettings ? (
                <ViewSettings />
            ) : (
                <section className='main-screen'>
                    <Header title='Create settings' route1='View settings' toggle={handleScreenToggle} />

                    <section className="content">
                        Create Settings
                    </section>
                </section>
            )}
        </>
    );
};

export { CreateSettings, ViewSettings };