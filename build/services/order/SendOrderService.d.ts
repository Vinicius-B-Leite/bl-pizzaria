declare class SendOrderService {
    execute(order_id: string): Promise<import(".prisma/client").Order>;
}
export { SendOrderService };
