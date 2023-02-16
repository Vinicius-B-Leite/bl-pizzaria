import prismaclient from "../../prisma";



interface CreateOrderItemRequest {
    order_id: string,
    product_id: string,
    amount: number
}

class CreateOrderItemService {
    async execute({ amount, order_id, product_id }: CreateOrderItemRequest) {
        const item = prismaclient.item.create({
            data: {
                amount,
                order_id,
                product_id
            },
            select: {
                amount: true,
                id: true,
                order_id: true,
                product_id: true
            }
        })
        return item
    }
}

export { CreateOrderItemService }