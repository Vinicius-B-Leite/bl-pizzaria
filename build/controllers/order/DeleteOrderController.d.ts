import { Request, Response } from "express";
declare class DeleteOrderController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { DeleteOrderController };
