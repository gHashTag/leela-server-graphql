const typeDefs = `
  type Query {
    getAllReports: [Report!]!
    getReport(id: ID!): Report!
    getAllPlayers: [Player!]!
    getPlayer(id: ID!): Player!
  }

  type Mutation {
    createPlayer(input: PlayerInput!): Player!
    createReport(input: ReportInput!): Report!
    createComment(input: CommentInput!): Comment!
  }

  input CommentInput {
    reportId: ID!
    title: String!
  }

  input ReportInput {
    rallyAccount: String!
    plan: Int!
    title: String!
  }

  input PlayerInput {
    rallyAccount: String!
    fullName: String!
    avatar: String!
    intention: String!
    email: String!
    plan: Int!
    previousPlan: Int!
    isStart: Boolean!
    isFinished: Boolean!
    consecutiveSixes: Int!
    positionBeforeThreeSixes: Int!
  }

  type Player {
    id: ID!
    rallyAccount: String!
    fullName: String!
    avatar: String!
    intention: String!
    email: String!
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
    rallyAccount: String!
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
    rallyAccount: String!
    report: Report!
    player: Player!
    createdAt: String!
  }
`

export default typeDefs
