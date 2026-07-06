'use client';
import { bezierSans } from '@/shared/fonts/fonts';
import { useEffect, useRef, useState } from 'react';
import { useScrollProgress } from '../model/useScrollProgress';
import { ExploreSection } from './ExploreSection';
import { HeroSection } from './HeroSection';
import styles from './LaptopScrollMockup.module.scss';

export default function LaptopScrollMockup() {
    const { sectionRef, progress } = useScrollProgress();
    const screenRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxTranslate, setMaxTranslate] = useState(0);

    useEffect(() => {
        function measure() {
            if (!screenRef.current || !contentRef.current) return;
            const screenHeight = screenRef.current.clientHeight;
            const contentHeight = contentRef.current.scrollHeight;
            setMaxTranslate(Math.max(contentHeight - screenHeight, 0));
        }

        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    const translateY = -progress * maxTranslate;

    return (
        <section ref={sectionRef} className={styles['section']}>
            <div className={styles['sticky']}>
                <div className={styles['caption']}>
                    <h3 className={`${bezierSans.className}`}>
                        Создавайте мероприятия в 1 клик!
                    </h3>
                    <div className={styles['moreInfo']}>
                        <h4>
                            Современные шаблоны вечеринок, дней рождений,
                            обычных встреч
                            <br /> с друзьями и любых других поводов
                        </h4>
                        <div className={styles['functions']}>
                            <ul>
                                <li>
                                    <img
                                        className={styles['iconSize']}
                                        src="/mockups/icons/кисть.png"
                                    />
                                    <span>Фон</span>
                                </li>
                                <li>
                                    <div className={styles['iconA']}>Aa</div>
                                    <span>Шрифт</span>
                                </li>
                                <li>
                                    <svg
                                        className={styles['stars']}
                                        width="21"
                                        height="32"
                                        viewBox="0 0 31 42"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.1915 0C13.1915 0 14.1243 10.756 16.1764 13.4628C18.2285 16.1696 26.383 17.4 26.383 17.4C26.383 17.4 18.2285 18.6304 16.1764 21.3372C14.1243 24.044 13.1915 34.8 13.1915 34.8C13.1915 34.8 12.2587 24.044 10.2066 21.3372C8.15448 18.6304 0 17.4 0 17.4C0 17.4 8.15448 16.1696 10.2066 13.4628C12.2587 10.756 13.1915 0 13.1915 0Z"
                                            fill="#DDDDDD"
                                        />
                                        <path
                                            d="M24.4043 24.6C24.4043 24.6 24.8706 29.978 25.8967 31.3314C26.9228 32.6848 31 33.3 31 33.3C31 33.3 26.9228 33.9152 25.8967 35.2686C24.8706 36.622 24.4043 42 24.4043 42C24.4043 42 23.9379 36.622 22.9118 35.2686C21.8858 33.9152 17.8085 33.3 17.8085 33.3C17.8085 33.3 21.8858 32.6848 22.9118 31.3314C23.9379 29.978 24.4043 24.6 24.4043 24.6Z"
                                            fill="#DDDDDD"
                                        />
                                    </svg>

                                    <span>Анимация</span>
                                </li>
                                <li>
                                    <img
                                        className={styles['iconSize']}
                                        src="/mockups/icons/картина.png"
                                    />
                                    <span>Обложка</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles['laptop']}>
                    <img
                        src="/mockups/laptop-frame-cutout.png"
                        alt=""
                        className={styles['laptopFrame']}
                    />

                    <div ref={screenRef} className={styles['screen']}>
                        <div
                            ref={contentRef}
                            className={styles['content']}
                            style={{
                                transform: `translateY(${translateY}px)`,
                            }}
                        >
                            <HeroSection />
                            <ExploreSection />
                            <CreateSection />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CreateSection() {
    return (
        <div className={styles['createSection']}>
            <h3 className={bezierSans.className}>Создавай</h3>
            <div className={styles['createLayout']}>
                <img src="mockups/posters/createParty.png" />
            </div>
        </div>
    );
}
