import { Request, Response } from "express";
import Purchase from "../../Dto/Purchase_Dto";
import PurchaseService from "../../Services/Purchase_Services";
import productService from "../../Services/Product_Services";
import UserService from "../../Services/User_Services";

let RegisterPurchase = async (req: Request, res: Response) =>{
    try {
        const {
            id_product,
            CC,
            value
        } = req.body;
        const RegisterPurchase = await PurchaseService.register(new Purchase(id_product, CC, value))
        return res.status(201).json(
            { status: 'Compra registrada correctamente!' }
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}


export default RegisterPurchase;