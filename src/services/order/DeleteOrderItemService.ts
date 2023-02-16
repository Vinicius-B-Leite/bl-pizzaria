import prismaclient from "../../prisma";

class DeleteOrderItemService {
    async execute(item_id: string) {

        const item = await prismaclient.item.delete({
            where: {
                id: item_id
            }
        })
        return item
    }
}

export { DeleteOrderItemService }