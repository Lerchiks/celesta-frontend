import type { TemplateEvent } from '../model/types';
import { TemplateMockData } from './mock';

//Тут пока мок дата

export async function getTemplateEvents(): Promise<TemplateEvent[]> {
    return TemplateMockData;
}

export async function getTemplateEventById(
    id: string,
): Promise<TemplateEvent | undefined> {
    return TemplateMockData.find((tpl) => tpl.id === id);
}
