import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

//testes unitários: unidade da sua aplicação
//integração: comunicação entre duas ou mais unidades
//e2e: ponta a ponta: simulam um usuário operando na nossa aplicação


export const app = fastify()
app.register(cookie)

app.addHook('preHandler', async (request, reply) => {
  console.log(`[${request.method}] ${request.url}`)
} )

app.register(transactionsRoutes, {
  prefix: 'transactions'
})