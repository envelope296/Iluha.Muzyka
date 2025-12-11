import styles from "./ProfilePage.module.css";

export function ProfilePage() {
    var statistics = [
        {
            likes: 145
        },
        {
            likes: 453
        },
        {
            likes: 10
        },
        {
            likes: 123
        },
        {
            likes: 23
        },
        {
            likes: 44
        }
    ]

    var preferences = [
        {
            name: "Артисты",
            roundIcon: true,
            iconUrls: Array(5).fill("https://cdn-image.zvuk.com/pic?hash=0a8590c4-8544-4cfe-b473-0c7d8674e7c4&id=662301&size=large&type=artist")
        },
        {
            name: "Альбомы",
            roundIcon: false,
            iconUrls: Array(5).fill("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Wildeast.jpg/330px-Wildeast.jpg")
        },
        {
            name: "Треки",
            roundIcon: false,
            iconUrls: Array(5).fill("https://i.scdn.co/image/ab67616d0000b273f1764a532d4e0c82aecd15e4")
        },
        {
            name: "Продюсеры",
            roundIcon: true,
            iconUrls: Array(5).fill("https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5b/0d/51/5b0d51d3-d55c-85ea-d5d6-28aa0a2502f0/190295159894.jpg/1200x630bb.jpg")
        },
        {
            name: "Клипмейкеры",
            roundIcon: true,
            iconUrls: Array(3).fill("https://lastfm.freetls.fastly.net/i/u/ar0/ee8004563aff584e56b2425184f06f31.jpg")
        }
    ]

    return <div className={styles.container}>
        <div className={styles.profile}>
            <div className={styles.iconWrapper}>
                <img src="https://i.pinimg.com/originals/4c/91/89/4c91898948d06aa2fa3db505449d8533.jpg"></img>
            </div>
            <div className={styles.profileInfo}>
                <p className={styles.username}>tccckh</p>
                <p className={styles.email}>i.irudovi21@gmail.com</p>
                <p className={styles.date}>Дата регистрации: 10.12.2025</p>
            </div>
        </div>
        <div className={styles.grid}>
            <div className={`${styles.statistics} glass`}>
                <p className={styles.title}>Статистика</p>
                <div className={styles.statisticItemsContainer}>
                    {statistics.map(s => 
                        <div className={styles.statisticItem}>
                            <p>Поставлено лайков</p>
                            <p>{s.likes}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className={`${styles.preferences} glass`}>
                <p className={styles.title}>Предпочтения</p>
                <div className={styles.preferencesGrid}>
                    {preferences.map(p =>
                        <div className={styles.preferencesItem}>
                            <p>{p.name}</p>
                            <div className={styles.iconsContainer}>
                                {p.iconUrls.map(url =>
                                    <div className={p.roundIcon ? `${styles.iconWrapper} ${styles.iconWrapper__round}` : styles.iconWrapper}>
                                        <img src={url} />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={`${styles.aboutMe} glass`}>
                <p className={styles.title}>О себе</p>
                <p className={styles.text}>Меня зовут Вика, я живу в Праге, делаю 3D-модели, графику, дизайн и другие вкусные прикалюхи. Обычно слушаю норвежский фолк и португальское фадо, но сегодня решил подшарить за айс гергерта.</p>
            </div>
        </div>
    </div>
}