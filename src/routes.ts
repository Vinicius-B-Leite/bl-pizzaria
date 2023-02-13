import { Router, Response, Request } from "express";


const router = Router()

router.get('/', (req: Request, res: Response) => {
    throw new Error('Erro na requisição')
})



export default router