import { Event, TemplateEvent } from '../model/types';

const EventsMock: Event[] = [
    {
        id: 'ev-1',
        name: 'Girls Party',
        createdAt: new Date(Date.now()),
        startTime: new Date('2026-07-12T18:00:00'),
        endTime: new Date('2026-07-12T23:00:00'),
        place: 'Рубенштейна 5, 48 Chairs',
        host: 'Angelina',
    },
    {
        id: 'ev-2',
        name: 'Muse',
        createdAt: new Date(Date.now()),
        startTime: new Date('2026-07-12T19:00:00'),
        endTime: new Date('2026-07-12T23:00:00'),
        place: 'Рубенштейна 5, 48 Chairs',
        host: 'Angelina',
    },
    {
        id: 'ev-3',
        name: 'Clara',
        createdAt: new Date(Date.now()),
        startTime: new Date('2026-07-12T17:00:00'),
        endTime: new Date('2026-07-12T20:00:00'),
        place: 'Рубенштейна 5, 48 Chairs',
        host: 'Angelina',
    },
    {
        id: 'ev-4',
        name: 'Style',
        createdAt: new Date(Date.now()),
        startTime: new Date('2026-08-12T18:00:00'),
        endTime: new Date('2026-08-12T23:00:00'),
        place: 'Рубенштейна 5, 48 Chairs',
        host: 'Angelina',
    },
    {
        id: 'ev-5',
        name: 'Feast Of Folk',
        createdAt: new Date(Date.now()),
        startTime: new Date('2026-07-14T18:00:00'),
        endTime: new Date('2026-07-14T23:00:00'),
        place: 'Рубенштейна 5, 48 Chairs',
        host: 'Angelina',
    },
];

export const TemplateMockData: TemplateEvent[] = [
    {
        id: 'tmp-1',
        event: EventsMock[0],
        image: '/templates/carousel-mock/g-p.jpg',
    },
    {
        id: 'tmp-2',
        event: EventsMock[1],
        image: '/templates/carousel-mock/muse.jpg',
    },
    {
        id: 'tmp-3',
        event: EventsMock[2],
        image: '/templates/carousel-mock/clara.jpg',
    },
    {
        id: 'tmp-4',
        event: EventsMock[3],
        image: '/templates/carousel-mock/style.jpg',
    },
    {
        id: 'tmp-5',
        event: EventsMock[4],
        image: '/templates/carousel-mock/feast.jpg',
    },
];
