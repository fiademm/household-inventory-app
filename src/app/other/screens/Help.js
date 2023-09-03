import React from 'react';
import { CompactedSidebar } from '../components/Sidebars';
import { ViewHelp } from '../components/Help';

const Help = () => {
    return (
        <>
            <div className="main-component-container">
                <CompactedSidebar />

                <ViewHelp />
            </div>
        </>
    );
};

export default Help;