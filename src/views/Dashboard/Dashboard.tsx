import { getTemplateEvents } from '@/entities/Event';
import { getTemplates } from '@/entities/Template';
import EventCarousel from '@/widgets/EventCarousel';
import LaptopScrollMockup from '@/widgets/LaptopScrollMockup';
import TemplateCarousel from '@/widgets/TemplateCarousel';
import style from './Dashboard.module.scss';

export default async function Dashboard() {
    const eventsTemplates = await getTemplateEvents();
    const templates = await getTemplates();
    return (
        <div className={style['container']}>
            <EventCarousel templates={eventsTemplates} />

            <LaptopScrollMockup />

            <TemplateCarousel templates={templates} />
        </div>
    );
}
