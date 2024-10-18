import { Request, Response } from "express";
import Product from "../../Dto/Product_Dto";
import productService from "../../Services/Product_Services";

let Update_P = async (req: Request, res: Response) => {
    try {
        const {
            name_p,
            description_p,
            value_p,
            feature_p,
            amount_p,
            id_p,
        } = req.body;
        const Update_products = await productService.update(new Product(name_p, description_p, value_p, feature_p, amount_p, id_p ))
        return res.status(200).json({ status: 'Producto actualizado correctamente!' });
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
    }
}

export default Update_P;