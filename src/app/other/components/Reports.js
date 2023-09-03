import React, { useState } from 'react'
import Header from '../components/Header';

const ViewReports = () => {
    const [showViewReport, setShowViewReport] = useState(true);

    const handleScreenToggle = () => {
        setShowViewReport(!showViewReport);
    };

    return (
        <>
            {showViewReport ? (
                <section className='main-screen'>
                    <Header title='View reports' route1='Create report' toggle={handleScreenToggle} />

                    <section className="content">
                        View Reports
                    </section>
                </section>
            ) : (
                <CreateReport />
            )}
        </>
    );
};

const CreateReport = () => {
    const [showViewReport, setShowViewReport] = useState(false);

    const handleScreenToggle = () => {
        setShowViewReport(!showViewReport);
    };

    return (
        <>
            {showViewReport ? (
                <ViewReports />
            ) : (
                <section className='main-screen'>
                    <Header title='Create report' route1='View reports' toggle={handleScreenToggle} />

                    <section className="content">
                        Create Report
                    </section>
                </section>
            )}
        </>
    );
};

export { CreateReport, ViewReports };