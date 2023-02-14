import prismaclient from "../../../prisma";

class CreateCategoryService {
    async execute(name: string) {

        if (name.length === 0) throw new Error('Envie um nome válido')

        const category = await prismaclient.category.create({
            data: { name },
            select: { 
                id: true, 
                name: true,
            }
        })
        return category
    }
}

export { CreateCategoryService }