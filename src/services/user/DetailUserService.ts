import prismaclient from "../../prisma";

class DetailUserService {
    async execute(user_id: string) {
        const user = await prismaclient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                email: true,
                id: true,
                name: true,
            }
        })

        return user
    }
}

export { DetailUserService }