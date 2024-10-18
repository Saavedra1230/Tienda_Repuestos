import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let Login_U_Params = [
    check('phoneNumber').isLength({ min: 1, max: 10 }),
    check('password').isLength({ min: 10, max: 20 }),
    check('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('La contraseña no coincide con el dato ingresado anteriormente! ')
        } return true
    }),
    check('email').isEmail(),
];

function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export default {
    Login_U_Params,
    validator
};