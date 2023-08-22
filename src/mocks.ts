import { faker } from '@faker-js/faker'
import mockReports from './mockReports'
import mockPlayers from './mockPlayers'

const mocks = {
  Query: () => ({
    getAllReports: () => [...new Array(6)],
    getReport: (_: unknown, { id }: { id: string }) => {
      const report = mockReports.find((report) => report.id === id)
      if (report) {
        return report
      }
      throw new Error(`Report with id ${id} not found`)
    },
    getAllPlayers: () => [...new Array(6)],
    player: () => {}
  }),
  Player: () => ({
    id: faker.string.uuid(),
    rallyAccount: '0x61715aE5947Bdc45f4853639d1a48962051622d5',
    fullName: faker.internet.userName(),
    avatar: faker.image.avatar(),
    plan: faker.number.int({ min: 1, max: 72 }),
    previousPlan: faker.number.int({ min: 1, max: 72 }),
    isStart: faker.datatype.boolean(),
    isFinished: faker.datatype.boolean(),
    consecutiveSixes: faker.number.int(3),
    positionBeforeThreeSixes: faker.number.int(2),
    reports: [],
    createdAt: faker.date.anytime()
  }),
  Report: () => ({
    id: faker.string.uuid(),
    rallyAccount: '0x61715aE5947Bdc45f4853639d1a48962051622d5',
    title: faker.lorem.paragraph(5),
    player: {
      id: faker.string.uuid(),
      fullName: faker.internet.userName(),
      avatar: faker.image.avatar()
    },
    plan: 1,
    comments: [
      {
        id: faker.string.uuid(),
        title: faker.lorem.paragraph(2),
        createdAt: faker.date.anytime()
      },
      {
        id: faker.string.uuid(),
        title: faker.lorem.paragraph(2),
        createdAt: faker.date.anytime()
      }
    ],
    likes: [
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
          // id: '0x61715aE5947Bdc45f4853639d1a48962051622d5',
          fullName: faker.internet.userName()
        },
        createdAt: faker.date.anytime()
      }
    ],
    createdAt: faker.date.anytime()
  }),
  Comment: () => ({
    id: faker.string.uuid(),
    title: faker.lorem.paragraph(5),
    createdAt: faker.date.anytime()
  }),
  Like: () => ({
    id: faker.string.uuid(),
    report: {
      id: faker.string.uuid(), // Идентификатор отчета, к которому относится лайк
      title: faker.lorem.paragraph(5)
      // ... (другие поля отчета)
    },
    player: {
      id: faker.string.uuid(), // Идентификатор пользователя, который поставил лайк
      fullName: faker.internet.userName()
      // ... (другие поля пользователя)
    },
    createdAt: faker.date.anytime()
  })
}

export { mocks }
