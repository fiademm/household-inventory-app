import React from 'react';
import { CategoriesCard, ProductsCard, TransactionsCard, UsersCard } from './Cards';

const CategoriesCardList = ({ categories }) => {
    return (
        <>
            <section className="card-deck">
                <div className="custom-card-1 category-card card-headings">
                    <span style={{ textAlign: 'center', width: '5%', fontFamily: 'Jost-Medium' }}>Index</span>
                    <span style={{ textAlign: 'left', width: '25%' }}>Title</span>
                    <span style={{ textAlign: 'left', width: '70%' }}>Description</span>
                </div>
                {categories.map((category, index) => (
                    <CategoriesCard
                        key={category.id}
                        index={index + 1}
                        id={category.id}
                        title={category.title}
                        description={category.description}
                    />
                ))}
            </section>
        </>
    );
};

const DashboardCardList = () => {
    return (
        <></>
    );
};

const HelpCardList = () => {
    return (
        <></>
    );
};

const ProductsCardList = ({ products }) => {
    return (
        <>
            <section className="card-deck">
                <div className="custom-card-1 category-card card-headings">
                    <span style={{ textAlign: 'center', width: '5%', fontFamily: 'Jost-Medium' }}>Index</span>
                    <span style={{ textAlign: 'left', width: '10%' }}>Barcode</span>
                    <span style={{ textAlign: 'left', width: '34%' }}>Product name</span>
                    <span style={{ textAlign: 'left', width: '25%' }}>Category</span>
                    <span style={{ textAlign: 'left', width: '10%' }}>Price</span>
                    <span style={{ textAlign: 'left', width: '8%', textAlign: 'center' }}>Quantity</span>
                    <span style={{ textAlign: 'left', width: '8%' }}>Status</span>
                </div>
                {products.map((product, index) => (
                    <ProductsCard
                        key={product.id}
                        index={index + 1}
                        id={product.id}
                        barcode={product.barcode}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        quantity={product.quantity}
                        reOrderValue={product.reOrderValue}
                        status={product.status}
                    />
                ))}
            </section>
        </>
    );
};

const ReportsCardList = () => {
    return (
        <></>
    );
};

const SettingsCardList = () => {
    return (
        <></>
    );
};

const TransactionsCardList = ({ transactions }) => {
    return (
        <>
            <section className="card-deck">
                <div className="custom-card-1 category-card card-headings">
                    <span style={{ textAlign: 'center', width: '5%', fontFamily: 'Jost-Medium' }}>Index</span>
                    <span style={{ textAlign: 'left', width: '42%' }}>Product name</span>
                    <span style={{ textAlign: 'left', width: '10%' }}>Price</span>
                    <span style={{ textAlign: 'left', width: '10%', textAlign: 'center' }}>Quantity</span>
                    <span style={{ textAlign: 'left', width: '10%' }}>Amount</span>
                    <span style={{ textAlign: 'left', width: '25%' }}>Date</span>
                </div>
                {transactions.map((transaction, index) => (
                    <TransactionsCard
                        key={transaction.id}
                        index={index + 1}
                        id={transaction.id}
                        product={transaction.product}
                        price={transaction.price}
                        quantity={transaction.quantity}
                        amount={transaction.amount}
                        date={transaction.date}
                    />
                ))}
            </section>
        </>
    );
};

const UsersCardList = ({ users }) => {
    return (
        <>
            <section className="card-deck">
                <div className="custom-card-1 category-card card-headings">
                    <span style={{ textAlign: 'center', width: '5%', fontFamily: 'Jost-Medium' }}>Index</span>
                    <span style={{ textAlign: 'left', width: '25%' }}>Name</span>
                    <span style={{ textAlign: 'left', width: '35%' }}>Email address</span>
                    <span style={{ textAlign: 'left', width: '15%' }}>Role</span>
                    <span style={{ textAlign: 'left', width: '25%' }}>Password</span>
                </div>
                {users.map((user, index) => (
                    <UsersCard
                        key={user.id}
                        index={index + 1}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        role={user.role}
                        password={user.password}
                    />
                ))}
            </section>
        </>
    );
};


export { CategoriesCardList, DashboardCardList, HelpCardList, ProductsCardList, ReportsCardList, SettingsCardList, TransactionsCardList, UsersCardList };