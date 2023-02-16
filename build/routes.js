"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const GetCategoryController_1 = require("./controllers/category/GetCategoryController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const isAutenticated_1 = require("./middlewares/isAutenticated");
const multer_1 = __importDefault(require("./config/multer"));
const multer_2 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const FilterProductController_1 = require("./controllers/product/FilterProductController");
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const DeleteOrderController_1 = require("./controllers/order/DeleteOrderController");
const CreateOrderItemController_1 = require("./controllers/order/CreateOrderItemController");
const DeleteOrderItemController_1 = require("./controllers/order/DeleteOrderItemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrdersController_1 = require("./controllers/order/ListOrdersController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const router = (0, express_1.Router)();
const upload = (0, multer_2.default)(multer_1.default.upload('./tmp'));
router.use('/files', express_1.default.static(path_1.default.resolve(__dirname, '..', 'tmp')));
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/login', new AuthUserController_1.AuthUserController().handle);
router.get('/userDetail', isAutenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
router.post('/category', isAutenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/category', isAutenticated_1.isAuthenticated, new GetCategoryController_1.GetCategoryController().handle);
router.post('/product', isAutenticated_1.isAuthenticated, upload.single('file'), new CreateProductController_1.CreateProductController().handle);
router.get('/product', isAutenticated_1.isAuthenticated, new FilterProductController_1.FilterProductController().handle);
router.post('/order', isAutenticated_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.post('/order/item', isAutenticated_1.isAuthenticated, new CreateOrderItemController_1.CreateOrderItemController().handle);
router.delete('/order', isAutenticated_1.isAuthenticated, new DeleteOrderController_1.DeleteOrderController().handle);
router.delete('/order/item', isAutenticated_1.isAuthenticated, new DeleteOrderItemController_1.DeleteOrderItemController().handle);
router.put('/order/send', isAutenticated_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
router.get('/order', isAutenticated_1.isAuthenticated, new ListOrdersController_1.ListOrderController().handle);
router.get('/order/detail', isAutenticated_1.isAuthenticated, new DetailOrderController_1.DetailOrderController().hadle);
exports.default = router;
