import { Response, Request } from "express";
declare class CreateCategoryController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { CreateCategoryController };
