import { Request, Response } from "express";
import PurchaseService from "../../Services/Purchase_Services";

let ConsultPurchases = async (req: Request, res: Response) =>{
    try{
        let purchaseReq = await PurchaseService.get()
        return res.status(200).json(
            {status: 'query ok',
                purchaseReq: purchaseReq[0]
            }
        );
    }catch(error: any){
        if(error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).json({
                errorInfo: error.sqlMessage
            });
        }
    }
}

export default ConsultPurchases;