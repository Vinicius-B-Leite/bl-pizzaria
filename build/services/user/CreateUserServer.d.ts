interface UserRequest {
    name: string;
    email: string;
    password: string;
}
declare class CreateUserService {
    execute({ name, email, password }: UserRequest): Promise<{
        id: string;
        name: string;
        email: string;
    }>;
}
export { CreateUserService };
