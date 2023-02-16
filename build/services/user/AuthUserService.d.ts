interface AuthRequest {
    email: string;
    password: string;
}
declare class AuthUserService {
    execute({ email, password }: AuthRequest): Promise<{
        id: string;
        name: string;
        email: string;
        token: string;
    }>;
}
export { AuthUserService };
