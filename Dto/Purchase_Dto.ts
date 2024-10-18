class Purchase {
    private _id_product: number;
    private _CC: number;
    private _value: number;

    constructor(
        id_product: number,
        CC: number,
        value: number
    ){
        this._id_product = id_product;
        this._CC = CC;
        this._value = value;
    }

    get id_product(): number{
        return this._id_product;
    }

    get CC(): number{
        return this._CC;
    }

    get value(): number{
        return this.value;
    }

    set id_product(id_product: number){
        this._id_product = id_product;
    }

    set CC(CC: number){
        this._CC = CC;
    }

    set value(value: number){
        this._value = value;
    }

}

export default Purchase;
