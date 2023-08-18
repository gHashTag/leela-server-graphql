import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { addMocksToSchema } from '@graphql-tools/mock'
import { makeExecutableSchema } from '@graphql-tools/schema'

import resolvers from './resolvers'
import typeDefs from './schema'

async function runServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs, resolvers }),
      preserveResolvers: true
    })
  })

  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } })

  console.log(`🚀 Server listening at: ${url}`)
}

runServer().catch((error) => {
  console.error('Error starting Apollo Server:', error)
})
