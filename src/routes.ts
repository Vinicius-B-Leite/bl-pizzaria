import express, { Router, Response, Request } from "express";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { GetCategoryController } from "./controllers/category/GetCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAutenticated";
import uploadConfig from "./config/multer";
import multer from 'multer'
import path from 'path'
import { FilterProductController } from "./controllers/product/FilterProductController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { DeleteOrderController } from "./controllers/order/DeleteOrderController";

const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))


router.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/userDetail', isAuthenticated, new DetailUserController().handle)


router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new GetCategoryController().handle)

router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/product', isAuthenticated, new FilterProductController().handle)

router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new DeleteOrderController().handle)

export default router