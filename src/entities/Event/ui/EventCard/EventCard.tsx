import type { TemplateEvent } from '../../model/types';
import styles from './EventCard.module.scss';

interface EventCardProps {
    template: TemplateEvent;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
}

function formatTime(date?: Date): string {
    if (!date) return '';
    return date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    });
}

function formatPrice(price?: number): string {
    if (!price) return 'Бесплатно';
    return `${price} ₽`;
}

export default function EventCard({
    template,
    onHoverStart,
    onHoverEnd,
}: EventCardProps) {
    const { event, image } = template;

    return (
        <div
            className={styles['card']}
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
        >
            <div className={styles['imageWrapper']}>
                <img
                    src={image}
                    alt={event?.name}
                    className={styles['image']}
                />
            </div>

            <div className={styles['info']}>
                <div className={styles['details']}>
                    <span className={styles['detail']}>
                        {formatTime(event?.startTime)} –{' '}
                        {formatTime(event?.endTime)}
                    </span>
                    {event?.place && (
                        <span className={styles['detail']}>{event.place}</span>
                    )}
                    <span className={styles['detail']}>
                        {formatPrice(event?.price)}
                    </span>
                </div>
            </div>
        </div>
    );
}
