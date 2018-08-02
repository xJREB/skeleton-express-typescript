import { Router, Request, Response } from "express";

const router = Router();

router.get("/status", (req: Request, res: Response) => {
    const msg = {
        status: "200 OK",
        message: "API is up and running."
    };
    res.json(msg);
});

export { router };
