import { Request, Response } from "express";
declare class CreateUserController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { CreateUserController };
