import { Request, Response } from "express";
declare class ListOrderController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { ListOrderController };
