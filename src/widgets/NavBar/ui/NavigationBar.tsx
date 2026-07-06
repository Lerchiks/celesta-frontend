import { bezierSans } from '@/shared/fonts/fonts';
import style from './NavigationBar.module.scss';

export default function NavigationBar() {
    return (
        <div className={`${style['nav-bar-wrapper']}`}>
            <div className={style['nav-container']}>
                <span
                    className={`${style['nav-icon']}  ${bezierSans.className}`}
                >
                    Celesta
                </span>

                <nav>
                    <ul className={style['nav-ul']}>
                        <li>
                            <button className={style['nav-button']}>
                                Домой
                            </button>
                        </li>
                        <li>
                            <button className={style['nav-button']}>
                                Исследуй
                            </button>
                        </li>
                        <li>
                            <button className={style['nav-button']}>
                                Контакты
                            </button>
                        </li>
                        <li>
                            <button className={style['nav-button']}>
                                Помощь
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className={style['nav-right-btn']}>
                    {/** тут сделать иконку профиля при логине **/}
                    <button
                        className={`${style['nav-button']} ${style['nav-button-login']}`}
                    >
                        Войти
                    </button>
                    <button
                        className={`${style['nav-button']} ${style['nav-button-create']}`}
                    >
                        Создать ивент
                    </button>
                </div>
            </div>
        </div>
    );
}
