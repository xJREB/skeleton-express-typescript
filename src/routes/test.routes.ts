import { Request, Response, Router } from "express";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
    const msg = {
        message: "TESTING EVERYTHING!!!",
        myRandomKey: "myRandomValue"
    };
    res.json(msg);
});

export { router };
