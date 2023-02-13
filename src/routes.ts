import { Router, Response, Request } from "express";


const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.json({ ok: true })
})



export default router