class User {

    private _name: string;
    private _age: Number;
    private _email: string;
    private _password: string;
    private _phoneNumber: Number;
    private _address: string;
    private _CC: Number;
    private _Role: string


    constructor(
        name: string,
        age: Number, email: string,
        password: string, phoneNumber: Number,
        address: string, CC: Number,
        Role: string, 
    ) {
        this._name = name;
        this._age = age;
        this._email = email;
        this._password = password;
        this._phoneNumber = phoneNumber;
        this._address = address;
        this._CC = CC;
        this._Role = Role
    }

    // Getters
    get name(): string {
        return this._name;
    }

    get age(): Number {
        return this._age;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    get phoneNumber(): Number {
        return this._phoneNumber;
    }

    get address(): string {
        return this._address;
    }

    get CC(): Number {
        return this._CC;
    }

    get Role(): string{
        return this._Role;
    }

    // Setters
    set name(name: string) {
        this._name = name;
    }

    set age(age: Number) {
        this._age = age;
    }

    set email(email: string) {
        this._email = email;
    }

    set password(password: string) {
        this._password = password;
    }

    set phoneNumber(phoneNumber: Number) {
        this._phoneNumber = phoneNumber;
    }

    set address(address: string) {
        this._address = address;
    }

    set CC(CC: Number) {
        this._CC = CC;
    }

    set Role(Role: string){
        this._Role = Role;
    }
}

export default User;