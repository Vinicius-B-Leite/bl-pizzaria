import { Request, Response } from "express";
declare class DetailUserController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { DetailUserController };
