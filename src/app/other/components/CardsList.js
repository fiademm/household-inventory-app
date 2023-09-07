import React from 'react';
import { CategoriesCard } from './Cards';

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

const UsersCardList = () => {
    return (
        <></>
    );
};


export { CategoriesCardList, DashboardCardList, HelpCardList, ProductsCardList, ReportsCardList, SettingsCardList, TransactionsCardList, UsersCardList };