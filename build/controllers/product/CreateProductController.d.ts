import { Request, Response } from "express";
declare class CreateProductController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { CreateProductController };
