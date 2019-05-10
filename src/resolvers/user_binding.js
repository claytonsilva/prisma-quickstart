import { importSchema } from 'graphql-import'
import { Prisma } from 'prisma-binding'
const typeDefs = importSchema('src/schema.graphql')

const prisma = new Prisma({
  typeDefs,
  endpoint: `http://localhost:4466`,
  debug: true
})

/**
 * query users
 * @param {any} root
 * @param {any} args
 * @param {Context} context
 * @returns FragmentableArray<Company>
 */
const users = (root, args, context, info) => {
  return prisma.query.users(args, info)
}

export {
  users,
  prisma,
  typeDefs
}
