import React from 'react';
import Header from '../components/Header';
import { CompactedSidebar } from '../components/Sidebars';

const Dashboard = () => {
    return (
        <>
            <div className="main-component-container">
                <CompactedSidebar />

                <section className='main-screen'>
                    <Header />
                    <section className="content">
                        Dashboard
                    </section>
                </section>
            </div>
        </>
    );
};

export default Dashboard;