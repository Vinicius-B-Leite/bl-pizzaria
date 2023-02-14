import { Router, Response, Request } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";


const router = Router()

router.post('/users', new CreateUserController().handle)



export default router