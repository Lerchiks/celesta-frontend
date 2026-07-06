export interface Event {
    id: string;
    name: string;
    createdAt: Date;
    startTime: Date;
    endTime: Date;
    host: string;
    place?: string;
    price?: number;
    description?: string;
    members?: string[];
    peculiarities?: string;
}

export interface TemplateEvent {
    id: string;
    event?: Event;
    font?: string;
    image?: string;
    theme?: string;
    gallery?: string[];
}
