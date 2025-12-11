import type { ReactNode } from "react";
import styles from "./MainLayout.module.css";
import { NavigationMenu } from "../ui/NavigationMenu";
import SearchIcon from "@/assets/icons/search.svg?react";
import CheckMarkIcon from "@/assets/icons/check_mark.svg?react";
import PreviousIcon from "@/assets/icons/previous.svg?react";
import PlayIcon from "@/assets/icons/play.svg?react";
import SkipIcon from "@/assets/icons/skip.svg?react";
import ShuffleIcon from "@/assets/icons/shuffle.svg?react";
import RepeatIcon from "@/assets/icons/repeat.svg?react";
import HamburgerIcon from "@/assets/icons/hamburger.svg?react";
import ForwardIcon from "@/assets/icons/forward.svg?react";
import VolumeIcon from "@/assets/icons/volume.svg?react";

interface MainLayoutProps {
    children: ReactNode
}

export function MainLayout({children}: MainLayoutProps) {
    return <div className={styles.container}>
        
        <div className={styles.background} />
        <section className={styles.main}>
            <NavigationMenu />
            <div className={styles.mainWrapper}>
                <header className={styles.header}>
                    <div className={`${styles.nameWrapper} glass`}>
                        <p>SoundFlow</p>
                    </div>
                    <label className={`${styles.searchWrapper} glass`}>
                        <SearchIcon className={styles.icon} />
                        <input type="text" className={styles.search} placeholder="Трек, альбом, исполнитель" />
                    </label>
                    <div className={`${styles.profileWrapper} glass`}>
                        <CheckMarkIcon className={styles.icon} />
                        <div className={styles.profileIconWrapper}>
                            <img src="$/assets/images/profile.png" />
                        </div>
                        <div>
                            <p className={styles.profileName}>tccckh</p>
                            <p className={styles.profileEmail}>i.irudovi21@gmail.com</p>
                        </div>
                    </div>
                </header>
                <div className={`${styles.player} glass`}>
                    <div className={styles.mainControlsContainer}>
                        <PreviousIcon className={styles.icon} />
                        <div className={styles.iconWrapper}>
                            <PlayIcon className={styles.icon} />
                        </div>
                        <SkipIcon className={styles.icon} />
                    </div>
                    <div className={styles.additionalControlsContainer}>
                        <ShuffleIcon className={styles.icon} />
                        <RepeatIcon className={styles.icon} />
                    </div>
                    <div className={styles.musicInfo}>
                        <div className={styles.musicInfoIconWrapper}>
                            <img src="src/assets/images/music_1.jfif" />
                        </div>
                        <div className={styles.musicInfoCommon}>
                            <div className={styles.musicInfoCommonWrapper}>
                                <div className={styles.musicInfoTextWrapper}>
                                    <p>Групи</p>
                                    <p>Платина, OG Buda</p>
                                </div>
                                <p>0:00</p>
                            </div>
                            <div className={styles.musicTime}></div>
                        </div>
                    </div>
                    <div className={styles.soundControlsContainer}>
                        <HamburgerIcon className={styles.icon} />
                        <ForwardIcon className={styles.icon} />
                        <VolumeIcon className={styles.icon} />
                    </div>
                    <div className={styles.volumeLine}></div>
                </div>
                <div className={`${styles.content} glass`}>
                    {children}
                </div>
            </div>
        </section>
    </div>
}