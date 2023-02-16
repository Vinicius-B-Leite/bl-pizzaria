import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { Response, Request } from "express";



class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const name = req.body.name
        const category = await new CreateCategoryService().execute(name)

        return res.json(category)
    }
}

export { CreateCategoryController }