import { Response, Request } from "express"
import { GetCategoryService } from "../../services/category/GetCategoryService"

class GetCategoryController {
    async handle(req: Request, res: Response) {
        const categories = await new GetCategoryService().execute()
        return res.json(categories)
    }
}

export { GetCategoryController }