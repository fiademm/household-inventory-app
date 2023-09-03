import React from 'react';
import { CompactedSidebar } from '../components/Sidebars';
import { ViewTransactions } from '../components/Transactions';

const Transactions = () => {
    return (
        <>
            <div className="main-component-container">
                <CompactedSidebar />

                <ViewTransactions />
            </div>
        </>
    );
};

export default Transactions;