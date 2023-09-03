import React, { useState } from 'react'
import Header from '../components/Header';

const ViewHelps = () => {
    const [showViewHelp, setShowViewHelp] = useState(true);

    const handleScreenToggle = () => {
        setShowViewHelp(!showViewHelp);
    };

    return (
        <>
            {showViewHelp ? (
                <section className='main-screen'>
                    <Header title='View helps' route1='Create help' toggle={handleScreenToggle} />

                    <section className="content">
                        View Helps
                    </section>
                </section>
            ) : (
                <CreateHelp />
            )}
        </>
    );
};

const CreateHelp = () => {
    const [showViewHelp, setShowViewHelp] = useState(false);

    const handleScreenToggle = () => {
        setShowViewHelp(!showViewHelp);
    };

    return (
        <>
            {showViewHelp ? (
                <ViewHelps />
            ) : (
                <section className='main-screen'>
                    <Header title='Create help' route1='View helps' toggle={handleScreenToggle} />

                    <section className="content">
                        Create Help
                    </section>
                </section>
            )}
        </>
    );
};

export { CreateHelp, ViewHelps };