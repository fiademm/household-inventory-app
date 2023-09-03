import React, { useState } from 'react'
import Header from '../components/Header';

const ViewHelp = () => {
    const [showViewHelp, setShowViewHelp] = useState(true);

    const handleScreenToggle = () => {
        setShowViewHelp(!showViewHelp);
    };

    return (
        <>
            {showViewHelp ? (
                <section className='main-screen'>
                    <Header title='View help' route1='Create help' toggle={handleScreenToggle} />

                    <section className="content">
                        View Help
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
                <ViewHelp />
            ) : (
                <section className='main-screen'>
                    <Header title='Create help' route1='View help' toggle={handleScreenToggle} />

                    <section className="content">
                        Create Help
                    </section>
                </section>
            )}
        </>
    );
};

export { CreateHelp, ViewHelp };