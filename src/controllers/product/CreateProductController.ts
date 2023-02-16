import { Request, Response } from "express"
import { CreateProductService } from "../../services/product/CreateProductService"

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body

        if (!req.file) throw new Error('Erro ao receber imagem')
        else {
            let banner = req.file.fieldname
            const product = await new CreateProductService().execute({ name, price, description, banner, category_id })

            return res.json(product)
        }
    }
}

export { CreateProductController }