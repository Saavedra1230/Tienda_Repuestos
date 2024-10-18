import { Request, Response } from "express";
import Product from "../../Dto/Product_Dto";
import productService from "../../Services/Product_Services";


let Products = async (req: Request, res: Response) => {
    try {
        const {
            name_p,
            description_p,
            value_p,
            feature_p,
            id_p,
            amount_p,
        } = req.body;
        const registerProduct = await productService.register(new Product(name_p, description_p, value_p, feature_p, id_p, amount_p))
        return res.status(201).json(
            { status: 'Producto registrado correctamente!' }
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}


export default Products;