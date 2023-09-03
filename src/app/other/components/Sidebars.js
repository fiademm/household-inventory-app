import React, { useEffect, useState } from 'react';
import { BsArrowBarLeft, BsBag, BsBox2, BsGrid, BsPeople, BsQuestionCircle, BsSliders, BsTicketPerforated } from "react-icons/bs";
import { Link } from 'react-router-dom';
import '../styles/Styles.css';

const ExpandedSidebar = () => {
    const [menus, setMenus] = useState([
        {
            icon: BsGrid,
            title: 'Dashboard',
            link: '/Dashboard',
            selected: false
        },
        {
            icon: BsBox2,
            title: 'Categories',
            link: '/Categories',
            selected: false
        },
        {
            icon: BsBag,
            title: 'Products',
            link: '/Products',
            selected: false
        },
        {
            icon: BsSliders,
            title: 'Settings',
            link: '/Settings',
            selected: false
        },
        {
            icon: BsQuestionCircle,
            title: 'Support',
            link: '/Support',
            selected: false
        },
        {
            icon: BsTicketPerforated,
            title: 'Transactions',
            link: '/Transactions',
            selected: false
        },
        {
            icon: BsPeople,
            title: 'Users',
            link: '/Users',
            selected: false
        },
        {
            icon: BsArrowBarLeft,
            title: 'Logout',
            link: '/Login',
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
        localStorage.setItem('selectedMenuIndex', index.toString()); // Store selected menu index in localStorage
    };

    const [showExpandedSidebar, setShowExpandedSidebar] = useState(true);

    const handleToggle = () => {
        setShowExpandedSidebar(!showExpandedSidebar);
    };

    useEffect(() => {
        const selectedMenuIndex = localStorage.getItem('selectedMenuIndex');
        if (selectedMenuIndex) {
            handleMenuClick(parseInt(selectedMenuIndex));
        }
    }, []);

    return (
        <>
            {showExpandedSidebar ? (
                <section className='expanded-sidebar'>
                    <span className='logo-text' onClick={handleToggle}>
                        BASKETS
                    </span>
                    {menus.map((menu, index) => (
                        <Link
                            to={menu.link}
                            key={index}
                            onClick={() => handleMenuClick(index)}
                            className={menu.selected ? 'selected-menu' : 'unselected-menu'}
                        >
                            <menu.icon className='es-icon' />
                            {menu.title}
                        </Link>
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
            link: '/Dashboard',
            selected: false
        },
        {
            icon: BsBox2,
            title: 'Categories',
            link: '/Categories',
            selected: false
        },
        {
            icon: BsBag,
            title: 'Products',
            link: '/Products',
            selected: false
        },
        {
            icon: BsSliders,
            title: 'Settings',
            link: '/Settings',
            selected: false
        },
        {
            icon: BsQuestionCircle,
            title: 'Support',
            link: '/Support',
            selected: false
        },
        {
            icon: BsTicketPerforated,
            title: 'Transactions',
            link: '/Transactions',
            selected: false
        },
        {
            icon: BsPeople,
            title: 'Users',
            link: '/Users',
            selected: false
        },
        {
            icon: BsArrowBarLeft,
            title: 'Logout',
            link: '/Login',
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
        localStorage.setItem('selectedMenuIndex', index.toString()); // Store selected menu index in localStorage
    };


    const [showExpandedSidebar, setShowExpandedSidebar] = useState(false);

    const handleToggle = () => {
        setShowExpandedSidebar(!showExpandedSidebar);
    };

    useEffect(() => {
        const selectedMenuIndex = localStorage.getItem('selectedMenuIndex');
        if (selectedMenuIndex) {
            handleMenuClick(parseInt(selectedMenuIndex));
        }
    }, []);

    return (
        <>
            {showExpandedSidebar ? (
                <ExpandedSidebar />
            ) : (
                <section className='compacted-sidebar'>
                    <span className='logo-text' onClick={handleToggle} >KETS</span>
                    {menus.map((menu, index) => (
                        <>
                            <Link
                                to={menu.link}
                                key={index}
                                onClick={() => handleMenuClick(index)}
                                className={menu.selected ? 'selected-menu' : 'unselected-menu'}
                            >
                                <menu.icon className='es-icon' />
                            </Link>
                        </>
                    ))}
                </section>
            )}
        </>
    );
};

export { CompactedSidebar, ExpandedSidebar };
