import { hash } from "bcryptjs"
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
            }
        })

        if (userAlreadyExists) {
            throw new Error("Usuário já existe")
        }


        const passwordHash = await hash(password, 8)
        const user = await prismaclient.user.create({
            data: { name, email, password: passwordHash },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user
    }



}

export { CreateUserService }