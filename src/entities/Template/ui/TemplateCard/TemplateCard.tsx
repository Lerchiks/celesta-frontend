import { Template } from '../../model/types';
import styles from './TemplateCard.module.scss';

export default function TemplateCard({ template }: { template: Template }) {
    return (
        <div
            className={styles['card']}
            style={{ background: template.background }}
        >
            <div
                className={styles['inner']}
                style={{ background: template.image }}
            />
        </div>
    );
}
