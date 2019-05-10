import { GraphQLServer } from 'graphql-yoga'
import { resolversBind } from '../resolvers/index'
import { prisma, typeDefs } from '../resolvers/user_binding'

const server = new GraphQLServer({
  typeDefs,
  resolvers: resolversBind,
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
