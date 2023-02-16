"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterProductController = void 0;
const FilterProductService_1 = require("../../services/product/FilterProductService");
class FilterProductController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield new FilterProductService_1.FilterProductService().execute(req.query.category_id);
            console.log("🚀 ~ file: FilterProductController.ts:8 ~ FilterProductController ~ handle ~ products", products);
            return res.json(products);
        });
    }
}
exports.FilterProductController = FilterProductController;
