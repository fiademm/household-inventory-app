import React from 'react';
import { CompactedSidebar } from '../components/Sidebars';
import { ViewUsers } from '../components/Users';

const Users = () => {
    return (
        <>
            <div className="main-component-container">
                <CompactedSidebar />

                <ViewUsers />
            </div>
        </>
    );
};

export default Users;