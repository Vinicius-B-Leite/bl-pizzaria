import prismaclient from "../../prisma"

interface CreateOrderRequest {
    name?: string,
    table: number
}

class CreateOrderService {
    async execute({ table, name }: CreateOrderRequest) {

        const order = await prismaclient.order.create({
            data: {
                table
            }
        })

        return order
    }
}

export { CreateOrderService }