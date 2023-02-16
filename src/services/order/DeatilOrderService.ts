import prismaclient from "../../prisma";

class DetailOrderService {
    async execute(order_id: string) {
        const orders = await prismaclient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                order: true,
                product: true
            },
        })

        return orders
    }
}

export { DetailOrderService }