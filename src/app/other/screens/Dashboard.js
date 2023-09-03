import React from 'react'
import { ExpandedSidebar } from '../components/Sidebars';
import Header from '../components/Header';

const Dashboard = () => {
    return (
        <>
            <div className="main-component-container">
                <ExpandedSidebar />

                <section className='main-screen'>
                    <Header />
                    <section className="content"></section>
                </section>
            </div>
        </>
    );
};

export default Dashboard;