import { Film } from "../film/film";

export class Category {
    id: Number;
    name: string;
    lastUpdate: Date;
    films: Film[] = [];
}
