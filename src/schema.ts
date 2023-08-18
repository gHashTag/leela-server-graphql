const typeDefs = `
  type Query {
    getAllReports: [Report!]!
    getReport(id: ID!): Report!
    getAllPlayers: [Player!]!
    player(id: ID!): Player!
  }

  type Player {
    id: ID!
    fullName: String!
    avatar: String!
    plan: Int!
    previousPlan: Int!
    isStart: Boolean!
    isFinished: Boolean!
    consecutiveSixes: Int!
    positionBeforeThreeSixes: Int!
    reports: [Report!]!
    createdAt: String!
  }

  type Report {
    id: ID!
    plan: Int!
    player: Player!
    title: String!
    createdAt: String!
    likes: [Like!]!
    comments: [Comment!]!

  }

  type Comment {
    id: ID!
    title: String!
    createdAt: String!
    author: Player!
  }

  type Like {
    id: ID!
    report: Report!
    player: Player!
    createdAt: String!
  }
`

export default typeDefs
