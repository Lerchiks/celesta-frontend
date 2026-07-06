import { bezierSans } from '@/shared/fonts/fonts';
import styles from './LaptopScrollMockup.module.scss';

const HERO_POSTERS = [
    {
        src: '/mockups/posters/clara.jpg',
        left: 8.03,
        top: 3.29,
        width: 15.23,
        height: 19.82,
    },
    {
        src: '/mockups/posters/feast.jpg',
        left: 73.26,
        top: 2.28,
        width: 20.53,
        height: 26.76,
    },
    {
        src: '/mockups/posters/g-p.jpg',
        left: 34.6,
        top: -20.27,
        width: 27.65,
        height: 35.98,
    },
    {
        src: '/mockups/posters/happyB.jpg',
        left: 85.26,
        top: 38.45,
        width: 29.74,
        height: 31.64,
    },
    {
        src: '/mockups/posters/murder.jpg',
        left: 0,
        top: 32.6,
        width: 19.54,
        height: 33.42,
    },
    {
        src: '/mockups/posters/muse.jpg',
        left: 60.43,
        top: 58.68,
        width: 15.43,
        height: 22.66,
        rotate: -0.73,
    },
    {
        src: '/mockups/posters/partyy.jpg',
        left: 29.8,
        top: 62.33,
        width: 18.63,
        height: 27.4,
    },
];

export function HeroSection() {
    return (
        <div className={styles['heroSection']}>
            <div className={styles['posterCollage']}>
                {HERO_POSTERS.map((poster, index) => (
                    <div
                        key={poster.src + index}
                        className={styles['posterAbs']}
                        style={{
                            left: `${poster.left}%`,
                            top: `${poster.top}%`,
                            width: `${poster.width}%`,
                            height: `${poster.height}%`,
                            backgroundImage: `url(${poster.src})`,
                            transform: poster.rotate
                                ? `rotate(${poster.rotate}deg)`
                                : undefined,
                        }}
                    />
                ))}
                <div
                    className={`${styles['heroText']} ${bezierSans.className}`}
                >
                    <span className={styles['logo']}>Celesta</span>
                    <p>Планируйте мероприятия за секунды</p>
                </div>
            </div>
        </div>
    );
}
