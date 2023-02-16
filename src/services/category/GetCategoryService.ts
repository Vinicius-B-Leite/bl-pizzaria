import prismaclient from "../../prisma";

class GetCategoryService {
    async execute() {
        return await prismaclient.category.findMany({
            select:{
                id: true,
                name: true
            }
        })
    }
}

export  { GetCategoryService }