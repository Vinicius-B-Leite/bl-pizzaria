declare class GetCategoryService {
    execute(): Promise<{
        id: string;
        name: string;
    }[]>;
}
export { GetCategoryService };
