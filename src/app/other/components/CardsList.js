import React from 'react';
import { CategoriesCard, UsersCard } from './Cards';

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

const ProductsCardList = () => {
    return (
        <></>
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

const TransactionsCardList = () => {
    return (
        <></>
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