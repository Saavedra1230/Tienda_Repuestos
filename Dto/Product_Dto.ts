class Product {
    
    private _name_p: string;
    private _description_p: string;
    private _value_p: Number;
    private _feature_p: string;
    private _id_p: Number;
    private _amount_p: Number
    

    constructor(
        name_p: string, description_p: string,
        value_p: Number,
        feature_p: string, id_p: Number,
        amount_p: Number,
    ) {
        this._name_p = name_p;
        this._description_p = description_p;
        this._value_p = value_p;
        this._feature_p = feature_p;
        this._id_p = id_p;
        this._amount_p = amount_p;
    }

    // Getters
    get name_p(): string {
        return this._name_p;
    }

    get description_p(): string {
        return this._description_p;
    }

    get value_p(): Number {
        return this._value_p;
    }

    get feature_p(): string {
        return this._feature_p;
    }

    get id_p(): Number {
        return this._id_p;
    }

    get amount_p(): Number {
        return this._amount_p;
    }

    // Setters
    set name_p(name_p: string) {
        this._name_p = name_p;
    }

    set description_p(description_p: string) {
        this._description_p = description_p;
    }

    set value_p(value: Number) {
        this._value_p = value;
    }

    set feature_p(feature_p: string) {
        this._feature_p = feature_p;
    }

    set id_p(id_p: Number) {
        this._id_p = id_p;
    }

    set amount_p(amount_p: Number){
        this._amount_p = amount_p;
    }
}

export default Product;