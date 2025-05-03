import express from 'express';
import { PrismaClient } from "@prisma/client";

const app = express();
const client= new PrismaClient();

app.get("/users",async (req,res)=>{
    const users=await client.user.findMany();
    res.send({
        users
    })
})

app.get("/todos/:id",async (req,res)=>{
    const id= req.params.id;
    const users= await client.user.findFirst({
        where:{
            id:parseInt(id)
        },
        select:{
            todos:true
        }
    });
    res.send({
        users
    })
})

app.listen(3000);

// commented out because it will create try to re-insert record

// async function createUser() {
//     await client.user.create({
//         data:{
//             username:"Deepak",
//             password:"123",
//             age:25,
//         }
//     })
// }
// createUser();