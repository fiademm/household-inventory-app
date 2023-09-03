import React from 'react'
import { ExpandedSidebar } from '../components/Sidebars';
import { ViewUsers } from '../components/Users';

const Users = () => {
    return (
        <>
            <div className="main-component-container">
                <ExpandedSidebar />

                <ViewUsers />
            </div>
        </>
    );
};

export default Users;