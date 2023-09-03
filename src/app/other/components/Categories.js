import React, { useState } from 'react'
import Header from '../components/Header';

const ViewCategories = () => {
    const [showViewCategory, setShowViewCategory] = useState(true);

    const handleScreenToggle = () => {
        setShowViewCategory(!showViewCategory);
    };

    return (
        <>
            {showViewCategory ? (
                <section className='main-screen'>
                    <Header title='View categories' route1='Create category' toggle={handleScreenToggle} />

                    <section className="content">
                        View Categories
                    </section>
                </section>
            ) : (
                <CreateCategory />
            )}
        </>
    );
};

const CreateCategory = () => {
    const [showViewCategory, setShowViewCategory] = useState(false);

    const handleScreenToggle = () => {
        setShowViewCategory(!showViewCategory);
    };

    return (
        <>
            {showViewCategory ? (
                <ViewCategories />
            ) : (
                <section className='main-screen'>
                    <Header title='Create category' route1='View categories' toggle={handleScreenToggle} />

                    <section className="content">
                        Create Category
                    </section>
                </section>
            )}
        </>
    );
};

export { CreateCategory, ViewCategories };