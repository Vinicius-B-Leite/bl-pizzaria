import prismaclient from "../../prisma";


class DeleteOrderService {
    async execute(order_id: string) {
        const order = await prismaclient.order.delete({
            where: {
                id: order_id
            }
        })
        return order
    }
}

export { DeleteOrderService }