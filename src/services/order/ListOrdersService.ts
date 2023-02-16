import prismaclient from "../../prisma";

class ListOrdersService {
    async execute() {
        const orders = await prismaclient.order.findMany({
            where: {
                draft: false,
                status: false
            },
            orderBy:{
                created_at: 'desc'
            }
        })


        return orders
    }
}


export { ListOrdersService }