import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check('name').isLength({ min: 1, max: 255 }) 
    .matches(/^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/), //solamente letras, numeros, caracteres especiales y espacios
    check('email').isEmail(),
    check('confirmyEmail').custom((value, { req }) => {
        if (value !== req.body.email) {
            return false
        } return true
    }),
    check('password').isLength({ min: 10, max: 20 }),
    check('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('La contraseña no coincide con el dato ingresa anteriormente! ')
        } return true
    })
        .matches(/^[a-zA-Z0-9\s,.-]+$/), // solamente letras, numeros, espacios

    check('age').isInt({ gt: 18, }),

    check('CC').isInt(),
    check('confirmCC').custom((value, { req }) => {
        if (value !== req.body.CC) {
            throw new Error('La Cedula de ciudadania no coincide con el dato ingresado anteriormente! ')
        } return true
    }),
    check('phoneNumber').isLength({ min: 1, max: 10 }),
    check('address').isLength({ min: 10, max: 100 }),
    check('Role').isLength({min: 1, max: 6})
];


function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}


export default {
    validatorParams,
    validator
};