declare class DeleteOrderService {
    execute(order_id: string): Promise<import(".prisma/client").Order>;
}
export { DeleteOrderService };
