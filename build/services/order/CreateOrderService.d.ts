interface CreateOrderRequest {
    name?: string;
    table: number;
}
declare class CreateOrderService {
    execute({ table, name }: CreateOrderRequest): Promise<import(".prisma/client").Order>;
}
export { CreateOrderService };
