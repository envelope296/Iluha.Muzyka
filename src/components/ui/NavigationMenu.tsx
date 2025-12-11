import { NavLink } from "react-router-dom";
import styles from "./NavigationMenu.module.css";
import HomeIcon from "@/assets/icons/home.svg?react";
import LikedIcon from "@/assets/icons/liked.svg?react";
import DownloadsIcon from "@/assets/icons/downloads.svg?react";
import ProfileIcon from "@/assets/icons/profile.svg?react";
import SettingsIcon from "@/assets/icons/settings.svg?react";

export function NavigationMenu() {
    const links = [
        {
            to: "/home",
            content: <HomeIcon />
        },
        {
            to: "/liked",
            content: <LikedIcon />
        },
        {
            to: "/downloads",
            content: <DownloadsIcon />
        },
        {
            to: "/profile",
            content: <ProfileIcon />
        },
        {
            to: "/settings",
            content: <SettingsIcon />
        }
    ]

    return <nav className={`${styles.nav} glass`}>
        {links.map(l =>
            <NavLink 
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.navLink__active}` : styles.navLink}
                to={l.to}
            >
                {l.content}
            </NavLink>
        )}
    </nav>
}