import prismaclient from "../../prisma"

class SendOrderService {
    async execute(order_id: string) {


        const order = await prismaclient.order.update({
            where:{
                id: order_id
            },
            data: {
                draft: false
            }
        })
        return order
    }
}

export { SendOrderService }