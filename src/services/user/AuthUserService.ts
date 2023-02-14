import { compare } from "bcryptjs";
import prismaclient from "../../prisma";
import { sign } from 'jsonwebtoken'


interface AuthRequest {
    email: string,
    password: string
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        const user = await prismaclient.user.findFirst({ where: { email } })

        if (!user) {
            throw new Error('Usuário não encontrado')
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error('Email/senha incorreta')
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )
        return { id: user.id, name: user.name, email: user.email, token }
    }
}

export { AuthUserService }