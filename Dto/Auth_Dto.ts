
class Auth {
    private _password: string;
    private _email: string
    constructor(
        password: string,
        email: string
    ) {
        this._password = password;
        this._email = email
    }

    // Getters
    get password(): string {
        return this._password;
    }

    get email(): string {
        return this._email;
    }

    // Setters
    set password(password: string) {
        this._password = password;
    }

    set email(email: string) {
        this._email = email;
    }
}

export default Auth;