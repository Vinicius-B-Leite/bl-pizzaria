import { Request, Response } from "express";
import { DeleteOrderItemService } from "../../services/order/DeleteOrderItemService";

class DeleteOrderItemController {
    async handle(req: Request, res: Response) {
        const item_id = req.query.item_id as string

        const item = await new DeleteOrderItemService().execute(item_id)

        return res.json(item)
    }
}

export { DeleteOrderItemController }