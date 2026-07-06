import type { Template } from '../model/types';
import { TemplateMockData } from './mock';

export async function getTemplates(): Promise<Template[]> {
    return TemplateMockData;
}
