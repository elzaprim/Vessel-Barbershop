import React, { useContext, useRef, useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    SLogo,
    SSearch,
    SSearchIcon,
    SSidebar,
    SSidebarButton,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
} from "./styles";

import { logoSVG } from "../../assets";

import {
    AiOutlineLeft,
    AiOutlineSearch,
} from "react-icons/ai";
import { MdLogout} from "react-icons/md";
import { BsCardList, BsClipboardData, BsLaptop, BsPeople, BsPerson, BsPersonBadge, BsQuestionCircle, BsWrench } from "react-icons/bs";

import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
    const searchRef = useRef(null);
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true);
            searchRef.current.focus();
        } else {
            // search functionality
        }
    };

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img src={logoSVG} alt="logo" />
            </SLogo>
            <SSearch
                onClick={searchClickHandler}
                style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
                <SSearchIcon>
                    <AiOutlineSearch />
                </SSearchIcon>
                <input
                    ref={searchRef}
                    placeholder="Search"
                    style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
                />
            </SSearch>
            <SDivider />
            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {/* if notifications are at 0 or null, do not display */}
                                {!!notification && (
                                    <SLinkNotification>{notification}</SLinkNotification>
                                )}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            {secondaryLinksArray.map(({ icon, label }) => (
                <SLinkContainer key={label}>
                    <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            <STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
            </STheme>
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Dashboard",
        icon: <BsLaptop />,
        to: "/dashboard",
        notification: 0,
    },
    {
        label: "Detail Cabang",
        icon: <BsCardList/>,
        to: "/detail-cabang",
        notification: 3,
    },
    {
        label: "Perbandingan Cabang",
        icon: <BsClipboardData />,
        to: "/perbandingan-cabang",
        notification: 0,
    },
    {
        label: "Pengaturan Akun",
        icon: <BsPerson/>,
        to: "/pengaturan-akun",
        notification: 0,
    },
    {
        label: "Pengaturan Perangkat",
        icon: <BsWrench/>,
        to: "/pengaturan-perangkat",
        notification: 0,
    },
    {
        label: "Performa Tukang Cukur",
        icon: <BsPersonBadge/>,
        to: "/performa-tukang-cukur",
        notification: 0,
    },
    {
        label: "Pusat Bantuan",
        icon: <BsQuestionCircle />,
        to: "/pusat-bantuan",
        notification: 0,
    },
];

const secondaryLinksArray = [

    {
        label: "Logout",
        icon: <MdLogout />,
    },
];

export default Sidebar;
