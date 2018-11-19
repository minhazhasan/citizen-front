import { Tags } from "./tags.model";

export class Fields{
    fieldTitle: String;
    fieldType: Number;

}

export class Observation{
    title: String;
    description: String;
    category: Number
    tags: String[];
    fields: Fields[];

    constructor(){}
}