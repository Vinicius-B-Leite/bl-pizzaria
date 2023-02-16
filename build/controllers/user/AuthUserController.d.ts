import { Response, Request } from "express";
declare class AuthUserController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { AuthUserController };
