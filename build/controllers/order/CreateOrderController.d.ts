import { Request, Response } from "express";
declare class CreateOrderController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { CreateOrderController };
