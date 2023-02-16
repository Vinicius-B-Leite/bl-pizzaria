declare class DetailUserService {
    execute(user_id: string): Promise<{
        id: string;
        name: string;
        email: string;
    }>;
}
export { DetailUserService };
