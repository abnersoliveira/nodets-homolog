import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const home = (req: Request, res: Response) => {

  async function main() {
    const user = await prisma.user.create({
      data: {
        name: 'Abner Siqueira de Oliveira',
        email: 'abnersoliveira@gmail.com',
      },
    })
    console.log(user)
    res.send(user);

  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })

}