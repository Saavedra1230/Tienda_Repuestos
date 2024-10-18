import express from "express";
import Register_Controller from '../Controllers/Users/Register_U_Controllers';
import Register_Validator from '../Middleware/Users/Register_U_Validators';
import Auth from "../Controllers/Users/Auth_Controllers";
import Auth_validadors from "../Middleware/Users/Auth_validadors";
import verifyToken from "../Middleware/Verify_Token_Validadors";
import profile from "../Controllers/Users/Profile_Controllers";

const router = express.Router();


router.post('/Register', Register_Validator.validatorParams, Register_Validator.validator, Register_Controller);
router.post('/Auth', Auth_validadors.validatorParams, Auth_validadors.validator, Auth);
router.get('/Verify', verifyToken, profile);


export default router;