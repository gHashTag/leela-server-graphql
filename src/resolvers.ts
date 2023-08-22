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
    getPlayer: (_: unknown, { id }: { id: string }) => {
      const player = mockPlayers.find((player) => player.rallyAccount === id)
      if (player) {
        return player
      }
      throw new Error(`Player with id ${id} not found`)
    }
  },
  Mutation: {
    createReport: (_: unknown, { input }: { input: { rallyAccount: string; plan: number; title: string } }) => {
      console.log('input', input)
      // Вам необходимо обработать создание отчета здесь, например, сохранить его в базе данных
      // и вернуть соответствующий объект Report.
      const { rallyAccount, plan, title } = input

      // Пример: создание отчета в базе данных (подставьте здесь свой код)
      const newReport = {
        id: 'new_report_id',
        plan,
        rallyAccount,
        title,
        createdAt: new Date().toISOString(),
        likes: [],
        comments: []
      }

      // Вернуть созданный отчет
      return newReport
    },
    createComment: (_: unknown, { input }: { input: { reportId: string; title: string } }) => {
      console.log('input', input)
      // Вам необходимо обработать создание комментария здесь, например, сохранить его в базе данных
      // и вернуть соответствующий объект Comment.
      const { reportId, title } = input

      // Пример: создание комментария в базе данных (подставьте здесь свой код)
      const newComment = {
        id: 'new_comment_id',
        reportId,
        title,
        createdAt: new Date().toISOString(),
        author: {
          id: 'author_id',
          fullName: 'John Doe',
          avatar: 'avatar_url',
          rallyAccount: '0x1234567890',
          intention: 'Some intention',
          email: 'john@example.com',
          plan: 9,
          previousPlan: 8,
          isStart: true,
          isFinished: false,
          consecutiveSixes: 2,
          positionBeforeThreeSixes: 5,
          createdAt: new Date().toISOString()
        }
      }

      // Вернуть созданный комментарий
      return newComment
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
        createdAt: faker.date.anytime(),
        author: {
          avatar: faker.image.avatar()
        }
      },
      {
        id: faker.string.uuid(),
        title: faker.lorem.paragraph(2),
        createdAt: faker.date.anytime(),
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
        createdAt: faker.date.anytime()
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
        createdAt: faker.date.anytime()
      }
    ],
    createdAt: () => faker.date.anytime()
  }
}

export default resolvers
