import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    "Query to get an array of all posts"
    allPosts: [Post!]!
    "Fetch a specific post by providing its ID"
    post(id: ID!): Post!

    "Get a list of all players"
    allPlayers: [Player!]!
    "Fetch a specific player by providing their ID"
    player(id: ID!): Player!
  }

  "Represents a player"
  type Player {
    id: ID!
    "Player's full name"
    fullName: String!
    "URL of player's profile picture"
    avatar: String
    "Player's plan number"
    plan: Int
    "Previous plan number"
    previousPlan: Int
    "Flag indicating if player is a starter"
    isStart: Boolean
    "Flag indicating if player has finished"
    isFinished: Boolean
    "Number of consecutive sixes"
    consecutiveSixes: Int
    "Position before three sixes"
    positionBeforeThreeSixes: Int
    "List of posts by this player"
    posts: [Post!]!
  }

  "A post contains teaching content"
  type Post {
    id: ID!
    "Title of the post"
    title: String!
    "Author of the post"
    author: Player!
    "Plan number associated with the post"
    plan: Int!
    "List of comments on the post"
    comments: [Comment!]!
  }

  "A Comment represents a single teaching unit"
  type Comment {
    id: ID!
    "Title of the comment"
    title: String!
  }
`

export default typeDefs
