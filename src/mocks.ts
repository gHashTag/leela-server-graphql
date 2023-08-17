import { faker } from '@faker-js/faker'

const mocks = {
  Query: () => ({
    allPosts: () => [...new Array(6)],
    post: (_: unknown, { id }: { id: string }) => ({
      id: id,
      title: `Sample Post ${id}`,
      author: {
        id: 'author_01',
        fullName: faker.internet.userName(),
        avatar: faker.image.avatar()
      },
      plan: 1,
      comments: []
    }),
    allPlayers: () => [...new Array(6)],
    player: (_: unknown, { id }: { id: string }) => ({
      id: id,
      fullName: faker.internet.userName(),
      avatar: faker.image.avatar(),
      plan: faker.number.int({ min: 1, max: 72 }),
      previousPlan: faker.number.int({ min: 1, max: 72 }),
      isStart: faker.datatype.boolean(),
      isFinished: faker.datatype.boolean(),
      consecutiveSixes: faker.datatype.number(),
      positionBeforeThreeSixes: faker.datatype.number(),
      posts: []
    })
  }),
  Player: () => ({
    id: faker.string.uuid(),
    fullName: faker.internet.userName(),
    avatar: faker.image.avatar(),
    plan: faker.number.int({ min: 1, max: 72 }),
    previousPlan: faker.number.int({ min: 1, max: 72 }),
    isStart: faker.datatype.boolean(),
    isFinished: faker.datatype.boolean(),
    consecutiveSixes: faker.number.int(3),
    positionBeforeThreeSixes: faker.number.int(2),
    posts: []
  }),
  Post: () => ({
    id: faker.string.uuid(),
    title: 'Sample Post',
    author: {
      id: faker.string.uuid(),
      fullName: faker.internet.userName(),
      avatar: faker.image.avatar()
    },
    plan: 1,
    comments: []
  }),
  Comment: () => ({
    id: faker.string.uuid(),
    title: 'Sample Comment'
  })
}

export { mocks }
