import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [

    check('id')
        .isInt({ gt: 0, lt: 1000000 })
        .withMessage('El ID debe ser un número mayor a 0!'),

    check('value')
        .isInt({ min: 10000, max: 1000000 })
        .withMessage('El valor de la compra debe ser de minimo $10.000COP')

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