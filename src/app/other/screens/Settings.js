import React from 'react';
import { CompactedSidebar } from '../components/Sidebars';
import { ViewSettings } from '../components/Settings';

const Settings = () => {
    return (
        <>
            <div className="main-component-container">
                <CompactedSidebar />

                <ViewSettings />
            </div>
        </>
    );
};

export default Settings;