import { Request, Response } from "express";
declare class DeleteOrderItemController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { DeleteOrderItemController };
