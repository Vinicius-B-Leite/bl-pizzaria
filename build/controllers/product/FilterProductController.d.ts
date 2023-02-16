import { Request, Response } from "express";
declare class FilterProductController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { FilterProductController };
