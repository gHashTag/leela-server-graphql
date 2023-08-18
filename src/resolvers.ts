import mockReports from './mockReports'
import mockPlayers from './mockPlayers'
import { faker } from '@faker-js/faker'

const resolvers = {
  Query: {
    getAllReports: () => {
      return mockReports
    },
    getReport: (_: unknown, { id }: { id: string }) => {
      const report = mockReports.find((report) => report.id === id)
      if (report) {
        return report
      }
      throw new Error(`Report with id ${id} not found`)
    },
    getAllPlayers: () => mockPlayers,
    player: (_: unknown, { id }: { id: string }) => {
      const player = mockPlayers.find((player) => player.id === id)
      if (player) {
        return player
      }
      throw new Error(`Player with id ${id} not found`)
    }
  },
  Player: {
    reports: (parent: any) => parent.reports || []
  },
  Report: {
    id: () => faker.string.uuid(),
    title: () => faker.lorem.paragraph(5),
    player: () => ({
      id: faker.string.uuid(),
      fullName: faker.internet.userName(),
      avatar: faker.image.avatar()
    }),
    plan: () => 1,
    comments: () => [
      {
        id: faker.string.uuid(),
        title: faker.lorem.paragraph(2),
        createdAt: faker.date.recent(),
        author: {
          avatar: faker.image.avatar()
        }
      },
      {
        id: faker.string.uuid(),
        title: faker.lorem.paragraph(2),
        createdAt: faker.date.recent(),
        author: {
          avatar: faker.image.avatar()
        }
      }
    ],
    likes: () => [
      {
        id: faker.string.uuid(),
        report: {
          id: faker.string.uuid(),
          title: faker.lorem.paragraph(5)
        },
        player: {
          id: faker.string.uuid(),
          fullName: faker.internet.userName()
        },
        createdAt: faker.date.recent()
      },
      {
        id: faker.string.uuid(),
        report: {
          id: faker.string.uuid(),
          title: faker.lorem.paragraph(5)
        },
        player: {
          id: faker.string.uuid(),
          fullName: faker.internet.userName()
        },
        createdAt: faker.date.recent()
      }
    ],
    createdAt: () => faker.date.recent()
  }
}

export default resolvers
