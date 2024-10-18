import express from "express";
import Products from "../Controllers/Products/Register_P_Controllers";
import RegisterValidator from '../Middleware/Products/Register_P_Validadors';
import Delete_P from "../Controllers/Products/Delete_P_Controllers";
import Update_P from "../Controllers/Products/Update_P_Controllers";
import Consult_P from "../Controllers/Products/Consult_P_Controllers";
import Update_P_Validadors from "../Middleware/Products/Update_P_Validadors";
import Delete_P_Validadors from "../Middleware/Products/Delete_P_Validadors";
/* import Delete_Product from "../Controllers/Delete_P_Controllers"; */
import verifyToken from "../Middleware/Verify_Token_Validadors";


const router = express.Router();

router.post('/Register_P', verifyToken, RegisterValidator.validatorParams, RegisterValidator.validator, Products);
router.put('/:id', verifyToken, Update_P_Validadors.Update_P_validatorParams, Update_P_Validadors.validator, Update_P);
router.delete('/:id', verifyToken, Delete_P_Validadors.Delete_P_validatorParams, Delete_P_Validadors.validator, Delete_P);
router.get('/Consult', Consult_P)

export default router;