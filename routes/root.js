'use strict'
const got = require('got')

module.exports = async function (fastify, opts) {

  fastify.get('/user', async function (request, reply) {
    const users = await got(`https://dummyjson.com/users`).json()
    return users
  })

  fastify.get('/user/:id', async function (request, reply) {
    const { id } = request.params
    const user = await got(`https://dummyjson.com/users/${id}`).json()
    return user;

  })

  fastify.get('/user/search/:name', async function (request, reply) {
    const { name } = request.params
    const user = await got(`https://dummyjson.com/users/search?q=${name}`).json()
    return user;

  })
}
