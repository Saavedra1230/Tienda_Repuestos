import { Request, Response } from "express";
import PurchaseService from "../../Services/Purchase_Services";

let DeletePurchase = async (req: Request, res: Response) =>{
    try{
        const {id} = req.params
        const DeletePurchase: any = await PurchaseService.delete(Number(id))
        if (DeletePurchase[0].effectedRows >0){
            return res.status(200).json({
                status: 'Compra eliminada correctamente!'
            });
        }else{
            return res.status(404).json({
                status: 'Compra no eliminada o no encontrada!'
            });
        }
    }catch (error: any){
        if (error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).json({
                errorInfo: error.sqlMessage
            });
        }
    }
}

export default DeletePurchase;