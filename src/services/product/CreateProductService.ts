import prismaclient from "../../prisma";


interface ProducRequest {
    name: string,
    price: string,
    description: string,
    banner: string,
    category_id: string
}

class CreateProductService {
    async execute({ name, price, description, banner, category_id }: ProducRequest) {

        const product = await prismaclient.product.create({
            data: {
                name, price, description, banner, category_id
            }
        })
        return product
    }
}

export { CreateProductService }