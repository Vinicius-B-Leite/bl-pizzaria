import prismaclient from "../../prisma";

class FilterProductService {
    async execute(category_id: string) {
        const products = await prismaclient.product.findMany({
            where: {
                category_id: category_id
            }
        })

        return products
    }
}

export { FilterProductService }