import { Router, Response, Request } from "express";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAutenticated";


const router = Router()

router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/userDetail', isAuthenticated, new DetailUserController().handle)


router.post('/category', isAuthenticated, new CreateCategoryController().handle)

export default router