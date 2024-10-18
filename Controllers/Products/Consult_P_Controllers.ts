import { Request, Response } from "express";
import productService from "../../Services/Product_Services";


let Consult_P = async (req: Request, res: Response) => {
    try {
        const Product = await productService.all();
        return res.status(200).json(
            {
                Product
            }
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({
                errorInfo: error.sqlMessage
            });
        }
    }
}

export default Consult_P;