interface CreateOrderItemRequest {
    order_id: string;
    product_id: string;
    amount: number;
}
declare class CreateOrderItemService {
    execute({ amount, order_id, product_id }: CreateOrderItemRequest): Promise<{
        id: string;
        order_id: string;
        amount: number;
        product_id: string;
    }>;
}
export { CreateOrderItemService };
