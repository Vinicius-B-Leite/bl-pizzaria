import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

class ListOrderController {
    async handle(req: Request, res: Response) {
        const orders = await new ListOrdersService().execute()

        return res.json(orders)
    }
}

export { ListOrderController }