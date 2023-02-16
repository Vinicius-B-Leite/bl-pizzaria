import { Request, Response } from "express";
declare class SendOrderController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { SendOrderController };
