import React from 'react';
import { CompactedSidebar } from '../components/Sidebars';
import { ViewReports } from '../components/Reports';

const Reports = () => {
    return (
        <>
            <div className="main-component-container">
                <CompactedSidebar />

                <ViewReports />
            </div>
        </>
    );
};

export default Reports;