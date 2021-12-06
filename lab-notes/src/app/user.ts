export class User {
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
    
    constructor(){
        this.username = '';
        this.email = '';
        this.password = '';
        this.repeatPassword = '';
    }
}
