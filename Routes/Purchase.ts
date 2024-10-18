import express  from "express";
import ConsultPurchases from "../Controllers/Purchases/Consult_Purchases_Controllers";
import RegisterPurchase from "../Controllers/Purchases/Register_Purchases_Controllers";
import Register_Purchase_Validadors from "../Middleware/Purchases/Register_Purchase_Validadors";
import UpdatePurchase from "../Controllers/Purchases/Update_Purchases_Controllers";
import Update_Purchase_Validadors from "../Middleware/Purchases/Update_Purchase_Validadors";
import DeletePurchase from "../Controllers/Purchases/Delete_Purchases_Controllers";
import Delete_Purchase_Validadors from "../Middleware/Purchases/Delete_Purchase_Validadors";
import verifyToken from "../Middleware/Verify_Token_Validadors";

const router = express.Router();

router.post('/', verifyToken, Register_Purchase_Validadors.validatorParams, Register_Purchase_Validadors.validator, RegisterPurchase);
router.delete('/:id', verifyToken, Delete_Purchase_Validadors.validatorParams, Delete_Purchase_Validadors.validator, DeletePurchase);
router.put('/:id', verifyToken, Update_Purchase_Validadors.validatorParams, Delete_Purchase_Validadors.validator, UpdatePurchase);
router.get('/Consult', ConsultPurchases);

export default router

