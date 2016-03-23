export const PidgeonCollection = new Mongo.Collection<Pidgeon>('pidgeons');

export interface Pidgeon {
    _id?: string;
    number: string;
    sex: string;
    color: string;
}