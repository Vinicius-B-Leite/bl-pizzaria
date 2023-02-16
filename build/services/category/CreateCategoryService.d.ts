declare class CreateCategoryService {
    execute(name: string): Promise<{
        id: string;
        name: string;
    }>;
}
export { CreateCategoryService };
