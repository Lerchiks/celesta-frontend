import { bezierSans } from '@/shared/fonts/fonts';
import styles from './LaptopScrollMockup.module.scss';

export function ExploreSection() {
    const posters = [
        { src: '/mockups/posters/apartment.png' },
        {
            src: '/mockups/posters/what.png',
            time: '18:00 - 23:30',
            place: 'Рубенштейна 5, 48 Chairs',
            price: '1500',
        },
        { src: '/mockups/posters/notDoing.png' },
    ];

    return (
        <div className={styles['exploreSection']}>
            <h3 className={`${bezierSans.className}`}>Находи</h3>
            <div className={styles['posterRow']}>
                {posters.map((poster, index) => (
                    <div key={poster.src + 'postersmockup'}>
                        <img
                            className={
                                index == 1
                                    ? styles['middle-poster']
                                    : styles['poster']
                            }
                            src={poster.src}
                        />
                        {index == 1 && (
                            <span className={styles['posterInfo']}>
                                <div>{poster.time}</div>
                                <div>{poster.place}</div>
                                <div>{poster.price}</div>
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
