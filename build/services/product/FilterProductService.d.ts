declare class FilterProductService {
    execute(category_id: string): Promise<import(".prisma/client").Product[]>;
}
export { FilterProductService };
