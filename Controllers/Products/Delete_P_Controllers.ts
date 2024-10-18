import { Request, Response } from "express";
import productService from "../../Services/Product_Services";


let Delete_P = async (req: Request, res: Response) => {
    try {
        const id_p = req.params.id
        const Delete_P: any = await productService.delete(Number(id_p));
        
        if (Delete_P > 0) {
            return res.status(200).json({
                status: 'Producto eliminado correctamente!'
            })
        } else {
            return res.status(404).json({
                status: 'Producto no encontrado'
            })
        }
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage })
        };
    }
}

export default Delete_P; 