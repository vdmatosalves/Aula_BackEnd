import fastify from 'fastify'
import {env} from "./shared/env/environments.js"
import { connection } from "./config/database.js"
import { randomUUID } from "node:crypto"
const app = fastify()

app.get('/hello2', async (request, reply) => {
    

    return { msg: 'oiiiii' }
})

app.get('/users', async (request, reply) => {
    const users = await connection('users').select('*')     
    return users 
})

app.post('/users', async (request, reply) => {

    const{name, email, password} = request.body as {name: string, email: string, password: string}
    const user = { id: randomUUID(), name, email, password }
    await connection('users').insert(user)

    return reply.status(201).send(user)
})

app.listen({ port: env.PORT }).then(() => {
    console.log(env)

    console.log('Rodando na porta ' + process.env.PORT)
})