import { Request, Response } from "express";
import PurchaseService from "../../Services/Purchase_Services";

let UpdatePurchase = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const UpdatePurchase: any = await PurchaseService.update(Number(id))
        if(UpdatePurchase[0].effectedRows > 0){
            return res.status(200).json(
                {
                    status: 'Compra aceptada correctamente!'});

        } else{
            return res.status(404).json({
                status: 'Compra rechazada o no encontrada'
            });
        }
    }catch(error: any){
        if (error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).json({
                errorInfo: error.sqlMessage
            })
        }
    }
}

export default UpdatePurchase;