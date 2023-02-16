declare class DeleteOrderItemService {
    execute(item_id: string): Promise<import(".prisma/client").Item>;
}
export { DeleteOrderItemService };
