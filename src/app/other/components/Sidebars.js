import React, { useEffect, useState } from 'react';
import { BsArrowBarLeft, BsBag, BsBox2, BsGrid, BsPeople, BsQuestionCircle, BsSliders, BsTicketPerforated } from "react-icons/bs";
import { Link } from 'react-router-dom';
import '../styles/Styles.css';

const ExpandedSidebar = () => {
    const handleLogout = () => {
        localStorage.setItem('selectedMenuIndex', '0'); // Store selected menu index in localStorage
    }

    const doNothing = () => { }

    const [menus, setMenus] = useState([
        {
            icon: BsGrid,
            title: 'Dashboard',
            link: '/Dashboard',
            selected: false,
            clickAction: doNothing
        },
        {
            icon: BsBox2,
            title: 'Categories',
            link: '/Categories',
            selected: false,
            clickAction: doNothing
        },
        {
            icon: BsBag,
            title: 'Products',
            link: '/Products',
            selected: false,
            clickAction: doNothing
        },
        {
            icon: BsSliders,
            title: 'Settings',
            link: '/Settings',
            selected: false,
            clickAction: doNothing
        },
        {
            icon: BsQuestionCircle,
            title: 'Support',
            link: '/Support',
            selected: false,
            clickAction: doNothing
        },
        {
            icon: BsTicketPerforated,
            title: 'Transactions',
            link: '/Transactions',
            selected: false,
            clickAction: doNothing
        },
        {
            icon: BsPeople,
            title: 'Users',
            link: '/Users',
            selected: false,
            clickAction: doNothing
        },
        {
            icon: BsArrowBarLeft,
            title: 'Logout',
            link: '/',
            selected: false,
            clickAction: handleLogout
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
                            onClick={() => {
                                handleMenuClick(index);
                                menu.clickAction();
                            }}
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
    const handleLogout = () => {
        localStorage.setItem('selectedMenuIndex', '0'); // Store selected menu index in localStorage
    };

    const doNothing = () => { };

    const [menus, setMenus] = useState([
        {
            icon: BsGrid,
            title: 'Dashboard',
            link: '/Dashboard',
            selected: false,
            clickAction: doNothing
        },
        {
            icon: BsBox2,
            title: 'Categories',
            link: '/Categories',
            selected: false,
            clickAction: doNothing
        },
        {
            icon: BsBag,
            title: 'Products',
            link: '/Products',
            selected: false,
            clickAction: doNothing
        },
        {
            icon: BsSliders,
            title: 'Settings',
            link: '/Settings',
            selected: false,
            clickAction: doNothing
        },
        {
            icon: BsQuestionCircle,
            title: 'Support',
            link: '/Support',
            selected: false,
            clickAction: doNothing
        },
        {
            icon: BsTicketPerforated,
            title: 'Transactions',
            link: '/Transactions',
            selected: false,
            clickAction: doNothing
        },
        {
            icon: BsPeople,
            title: 'Users',
            link: '/Users',
            selected: false,
            clickAction: doNothing
        },
        {
            icon: BsArrowBarLeft,
            title: 'Logout',
            link: '/',
            selected: false,
            clickAction: handleLogout
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
                                onClick={() => {
                                    handleMenuClick(index);
                                    menu.clickAction();
                                }}
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
