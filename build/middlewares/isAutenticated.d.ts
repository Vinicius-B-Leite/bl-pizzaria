import { NextFunction, Request, Response } from "express";
export declare function isAuthenticated(req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
