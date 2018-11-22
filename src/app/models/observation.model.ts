import { Tags } from "./tags.model";
import { Fields } from "./field.model";

export class Observation{
    accountId: string;
    observationId: string
    title: string;
    description: string;
    category: Number
    tags: string[];
    fields: Fields[];
    
    constructor(){}
}