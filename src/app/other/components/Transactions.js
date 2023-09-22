import React, { useState } from 'react'
import Header from '../components/Header';
import { TransactionsCardList } from './CardsList';

const ViewTransactions = () => {
    const [showViewTransaction, setShowViewTransaction] = useState(true);

    const handleScreenToggle = () => {
        setShowViewTransaction(!showViewTransaction);
    };

    const transactions = [
        {
            id: 1,
            product: '<Brand> <Name> <Size> <Color>',
            price: 400.50,
            quantity: 3,
            amount: 1201.50,
            date: '04/26/2023'
        },
        {
            id: 2,
            product: '<Brand> <Name> <Size> <Color>',
            price: 400.50,
            quantity: 3,
            amount: 1201.50,
            date: '04/26/2023'
        },
        {
            id: 3,
            product: '<Brand> <Name> <Size> <Color>',
            price: 400.50,
            quantity: 3,
            amount: 1201.50,
            date: '04/26/2023'
        },
        {
            id: 4,
            product: '<Brand> <Name> <Size> <Color>',
            price: 400.50,
            quantity: 3,
            amount: 1201.50,
            date: '04/26/2023'
        }
    ]

    return (
        <>
            {showViewTransaction ? (
                <section className='main-screen'>
                    <Header title='View transactions' route1='Create transaction' toggle={handleScreenToggle} />

                    <section className="content">
                    <div className="view-container">
                            <TransactionsCardList transactions={transactions} />
                        </div>
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