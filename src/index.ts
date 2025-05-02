import { PrismaClient } from "@prisma/client";

const client= new PrismaClient();

async function createUser() {
    await client.user.create({
        data:{
            username:"Deepak",
            password:"123",
            age:25,
        }
    })
}
createUser();