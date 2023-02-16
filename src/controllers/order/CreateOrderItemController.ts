import { Request, Response } from "express";
import { CreateOrderItemService } from "../../services/order/CreateOrderItemService";


class CreateOrderItemController {

    async handle(req: Request, res: Response) {

        const { order_id, product_id, amount } = req.body

        const item = await new CreateOrderItemService().execute({ order_id, product_id, amount })
        return res.json(item)
    }
}


export { CreateOrderItemController }