import prismaclient from "../../prisma"

interface UserRequest {
    name: string,
    email: string,
    password: string
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {

        if (!email) {
            throw new Error("Email incorreto")
        }

        const userAlreadyExists = await prismaclient.user.findFirst({
            where: {
                email: email
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        if (userAlreadyExists) {
            throw new Error("Usuário já existe")
        }

        const user = await prismaclient.user.create({
            data: { name, email, password }
        })

        return user
    }



}

export { CreateUserService }