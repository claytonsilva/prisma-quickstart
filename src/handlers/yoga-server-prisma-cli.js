import { importSchema } from 'graphql-import'
import { Prisma } from '../../generated/index'
import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from '../resolvers/index'

const typeDefs = importSchema('src/schema.graphql')

const prisma = new Prisma({
  typeDefs,
  resolvers,
  endpoint: `http://localhost:4466`
})

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req =>
    ({
      ...req,
      prisma
    })
})

server.start(() => console.log(`Server is running on`))
