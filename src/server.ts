import fastify from 'fastify'
const app = fastify()



function calcularIdade(ano: number) {
    const anoAtual = new Date().getFullYear()
    const idade = anoAtual - ano
    return idade
}


app.get('/hello/:ano', async (request, reply) => {
    const { ano } = request.params
    const idade = calcularIdade(ano)

    return { idade }
})

app.get('/hello2', async (request, reply) => {
    

    return { msg: 'oiiiii' }
})
app.listen({ port: Number(process.env.PORT) }).then(() => {
    console.log('Rodando na porta ' + process.env.PORT)
})