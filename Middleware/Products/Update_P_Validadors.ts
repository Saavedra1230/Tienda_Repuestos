import { check, validationResult, param } from 'express-validator';
import { NextFunction, Request, Response } from "express";

const Update_P_validatorParams = [
    param('id').isInt({ min: 1 }),
    check('name_p').isLength({ min: 1, max: 50 })
        .matches(/^[a-zA-Z0-9\s]+$/),
    check('description_p').isLength({ min: 1, max: 100 }),
    check('value_p').isFloat({ gt: 0, lt: 1000000 }),
    check('confirmValue_p').custom((value, { req }) => {
        if (value !== req.body.value_p) {
            throw new Error('El valor no coincide, con el valor ingresado anteriormente! ')
        } return true
    }),

    check('feature_p').isLength({ min: 1, max: 100 })
        .matches(/^[a-zA-Z0-9\s]+$/),
    check('id_p').isInt({ gt: 1, lt: 1000000 }),
    check('amount_p').isInt({ gt: 0, }),
];


function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}




export default {
    Update_P_validatorParams,
    validator
};
