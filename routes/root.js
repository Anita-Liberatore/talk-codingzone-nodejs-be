'use strict'
const got = require('got')

module.exports = async function (fastify, opts) {

  fastify.get('/user', async function (request, reply) {
    const users = await got(`https://dummyjson.com/users`).json()

    const result = users['users'].map(x => {

      return {
        username: x.username,
        gender: x.gender
      };
    })

    return reply.send(result)
  })

  fastify.get('/user/:id', async function (request, reply) {
    const { id } = request.params
    const user = await got(`https://dummyjson.com/users/${id}`).json()

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName
    }

  })

  fastify.get('/user/search/:name', async function (request, reply) {
    const { name } = request.params
    const users = await got(`https://dummyjson.com/users/search?q=${name}`).json()

    const result = users['users'].map(x => {

      return {
        username: x.username,
        gender: x.gender
      };
    })

    return reply.send(result)

  })
}
