interface ProducRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}
declare class CreateProductService {
    execute({ name, price, description, banner, category_id }: ProducRequest): Promise<import(".prisma/client").Product>;
}
export { CreateProductService };
