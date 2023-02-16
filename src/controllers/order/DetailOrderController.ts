import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DeatilOrderService";


class DetailOrderController {
    async hadle(req: Request, res: Response) {
        const order_id = req.query.order_id as string

        const orders = await new DetailOrderService().execute(order_id)

        return res.json(orders)
    }
}

export { DetailOrderController }