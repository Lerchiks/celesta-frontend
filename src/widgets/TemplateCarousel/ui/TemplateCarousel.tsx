import { Template } from '@/entities/Template';
import TemplateCard from '@/entities/Template/ui/TemplateCard/TemplateCard';
import { bezierSans } from '@/shared/fonts/fonts';
import PlanneryButton from '@/shared/ui/PlanneryButton';
import styles from './TemplateCarousel.module.scss';

export default function TemplateCarousel({
    templates,
}: {
    templates: Template[];
}) {
    return (
        <div className={styles['container']}>
            <div className={styles['templateHeader']}>
                <h3>
                    Выбери <span className={bezierSans.className}>шаблон</span>
                    на свой вкус
                </h3>
                <h4>
                    Десятки разнообразных шаблонов для твоего уникального
                    мероприятия
                </h4>
            </div>
            <div className={styles['carouselWrapper']}>
                {templates.map((template, i) => (
                    <div key={`${i}${template.id}`}>
                        <TemplateCard template={template} />
                    </div>
                ))}

                <button className={styles['nextBtn']}> {`>`} </button>
            </div>
            <div className={styles['btnWrapper']}>
                <PlanneryButton />
            </div>
        </div>
    );
}
