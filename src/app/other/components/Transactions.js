import React, { useState } from 'react'
import Header from '../components/Header';

const ViewTransactions = () => {
    const [showViewTransaction, setShowViewTransaction] = useState(true);

    const handleScreenToggle = () => {
        setShowViewTransaction(!showViewTransaction);
    };

    return (
        <>
            {showViewTransaction ? (
                <section className='main-screen'>
                    <Header title='View transactions' route1='Create transaction' toggle={handleScreenToggle} />

                    <section className="content">
                        View Transactions
                    </section>
                </section>
            ) : (
                <CreateTransaction />
            )}
        </>
    );
};

const CreateTransaction = () => {
    const [showViewTransaction, setShowViewTransaction] = useState(false);

    const handleScreenToggle = () => {
        setShowViewTransaction(!showViewTransaction);
    };

    return (
        <>
            {showViewTransaction ? (
                <ViewTransactions />
            ) : (
                <section className='main-screen'>
                    <Header title='Create transaction' route1='View transactions' toggle={handleScreenToggle} />

                    <section className="content">
                        Create Transaction
                    </section>
                </section>
            )}
        </>
    );
};

export { CreateTransaction, ViewTransactions };