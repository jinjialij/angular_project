export class Account {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    
    constructor(fn, ln, pw, email){
        this.id = null;
        this.firstName = fn;
        this.lastName = ln;
        this.password = pw;
        this.email = email;

    }
}