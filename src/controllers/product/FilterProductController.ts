import { Request, Response } from "express";
import { FilterProductService } from "../../services/product/FilterProductService";

class FilterProductController {
    async handle(req: Request, res: Response) {

        const products = await new FilterProductService().execute(req.query.category_id as string)
        console.log("🚀 ~ file: FilterProductController.ts:8 ~ FilterProductController ~ handle ~ products", products)

        return res.json(products)
    }
}

export { FilterProductController }