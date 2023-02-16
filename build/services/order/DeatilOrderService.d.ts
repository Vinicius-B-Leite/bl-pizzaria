declare class DetailOrderService {
    execute(order_id: string): Promise<(import(".prisma/client").Item & {
        order: import(".prisma/client").Order;
        product: import(".prisma/client").Product;
    })[]>;
}
export { DetailOrderService };
