import { Request, Response } from "express";

let profile = async (req: Request, res: Response) => {
    try {
        const CC = req.body.CC;
        return res.status(200).json(
            { status: 'Get profile, OK', CC: CC}
        );
    } catch (error: any) {
        return res.status(500).json(
            { errorInfo: "An unknow error has occurred"}
        )
    }
}

export default profile;