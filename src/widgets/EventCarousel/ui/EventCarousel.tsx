'use client';
import { EventCard, TemplateEvent } from '@/entities/Event';
import { bezierSans } from '@/shared/fonts/fonts';
import { useState } from 'react';
import style from './EventCarousel.module.scss';

export default function EventCarousel({
    templates,
}: {
    templates: TemplateEvent[];
}) {
    const [hoveredName, setHoveredName] = useState<string | null>(null);

    return (
        <div className={style['wrapper']}>
            <div className={style['header']}>
                <span
                    className={`${style['hoveredTitle']} ${bezierSans.className} ${hoveredName ? style['visible'] : ''}`}
                >
                    {hoveredName}
                </span>
            </div>

            <div className={style['container']}>
                {templates.map((tpl) => (
                    <EventCard
                        key={tpl.id}
                        template={tpl}
                        onHoverStart={() =>
                            setHoveredName(tpl.event?.name ?? null)
                        }
                        onHoverEnd={() => setHoveredName(null)}
                    />
                ))}
            </div>
        </div>
    );
}
