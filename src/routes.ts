import { Router, Response, Request } from "express";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";


const router = Router()

router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)


export default router