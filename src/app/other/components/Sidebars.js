import React, { useState } from 'react';
import '../styles/Styles.css';
import { BsArrowBarLeft, BsBag, BsBasket3, BsBox2, BsBoxes, BsFillGridFill, BsGrid, BsGridFill, BsPeople, BsSliders, BsTicketPerforated } from "react-icons/bs";

const ExpandedSidebar = () => {
    const [menus, setMenus] = useState([
        {
            icon: BsGrid,
            title: 'Dashboard',
            link: '/dashboard',
            selected: false
        },
        {
            icon: BsBox2,
            title: 'Categories',
            link: '/categories',
            selected: false
        },
        {
            icon: BsBag,
            title: 'Products',
            link: '/products',
            selected: false
        },
        {
            icon: BsSliders,
            title: 'Settings',
            link: '/settings',
            selected: false
        },
        {
            icon: BsTicketPerforated,
            title: 'Transactions',
            link: '/transactions',
            selected: false
        },
        {
            icon: BsPeople,
            title: 'Users',
            link: '/users',
            selected: false
        },
        {
            icon: BsArrowBarLeft,
            title: 'Logout',
            link: '/login',
            selected: false
        },
    ]);

    const handleMenuClick = (index) => {
        const updatedMenus = menus.map((menu, i) => {
            if (i === index) {
                return { ...menu, selected: true };
            } else {
                return { ...menu, selected: false };
            }
        });
        setMenus(updatedMenus);
    };


    const [showExpandedSidebar, setShowExpandedSidebar] = useState(true);

    const handleClick = () => {
        setShowExpandedSidebar(!showExpandedSidebar);
    };

    return (
        <>
            {showExpandedSidebar ? (
                <section className='expanded-sidebar'>
                    <span className='logo-text' onClick={handleClick}>BASKETS</span>
                    {menus.map((menu, index) => (
                        <>
                            <button
                                key={index}
                                onClick={() => handleMenuClick(index)}
                                className={menu.selected ? 'selected-menu' : 'unselected-menu'}
                            >
                                <menu.icon className='es-icon' />
                                {menu.title}
                            </button>
                        </>
                    ))}
                </section>
            ) : (
                <CompactedSidebar />
            )}
        </>
    );
};

const CompactedSidebar = () => {
    const [menus, setMenus] = useState([
        {
            icon: BsGrid,
            title: 'Dashboard',
            link: '/dashboard',
            selected: false
        },
        {
            icon: BsBox2,
            title: 'Categories',
            link: '/categories',
            selected: false
        },
        {
            icon: BsBag,
            title: 'Products',
            link: '/products',
            selected: false
        },
        {
            icon: BsSliders,
            title: 'Settings',
            link: '/settings',
            selected: false
        },
        {
            icon: BsTicketPerforated,
            title: 'Transactions',
            link: '/transactions',
            selected: false
        },
        {
            icon: BsPeople,
            title: 'Users',
            link: '/users',
            selected: false
        },
        {
            icon: BsArrowBarLeft,
            title: 'Logout',
            link: '/login',
            selected: false
        },
    ]);

    const handleMenuClick = (index) => {
        const updatedMenus = menus.map((menu, i) => {
            if (i === index) {
                return { ...menu, selected: true };
            } else {
                return { ...menu, selected: false };
            }
        });
        setMenus(updatedMenus);
    };


    const [showExpandedSidebar, setShowExpandedSidebar] = useState(false);

    const handleClick = () => {
        setShowExpandedSidebar(!showExpandedSidebar);
    };

    return (
        <>
            {showExpandedSidebar ? (
                <ExpandedSidebar />
            ) : (
                <section className='compacted-sidebar'>
                    <span className='logo-text' onClick={handleClick} >KETS</span>
                    {menus.map((menu, index) => (
                        <>
                            <button
                                key={index}
                                onClick={() => handleMenuClick(index)}
                                className={menu.selected ? 'selected-menu' : 'unselected-menu'}
                            >
                                <menu.icon className='es-icon' />
                            </button>
                        </>
                    ))}
                </section>
            )}
        </>
    );
};

export { ExpandedSidebar, CompactedSidebar };