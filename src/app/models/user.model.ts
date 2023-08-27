import { Army } from "./army.model";

export class User {
    id = 0;
    username = "";
    mail = "";
    army: Army[] = [];

    constructor(name: string, mail: string) {
        this.username = name;
        this.mail = mail;
    }
}