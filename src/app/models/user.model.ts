import { Army } from "./army.model";

export class User {
    idUser = 0;
    username = "";
    mail = "";
    password= "";
    army: Army[] = [];

    constructor(name: string, mail: string) {
        this.username = name;
        this.mail = mail;
    }
}