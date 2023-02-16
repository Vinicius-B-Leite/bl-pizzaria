import { Request, Response } from "express";
declare class CreateOrderItemController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { CreateOrderItemController };
