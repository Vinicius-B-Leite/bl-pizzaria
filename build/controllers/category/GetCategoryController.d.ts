import { Response, Request } from "express";
declare class GetCategoryController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { GetCategoryController };
