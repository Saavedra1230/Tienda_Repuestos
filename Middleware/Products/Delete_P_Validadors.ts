import { check, param, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

const Delete_P_validatorParams =[
    param('id').isInt({ gt:0}),
];

function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}




export default {
    Delete_P_validatorParams,
    validator
};
