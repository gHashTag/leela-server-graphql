import { faker } from '@faker-js/faker'
import mockReports from './mockReports'

const mockPlayers = [
  {
    id: '0x61715aE5947Bdc45f4853639d1a48962051622d5',
    fullName: faker.internet.userName(),
    avatar: faker.image.avatar(),
    plan: faker.number.int({ min: 1, max: 72 }),
    previousPlan: faker.number.int({ min: 1, max: 72 }),
    isStart: faker.datatype.boolean(),
    isFinished: faker.datatype.boolean(),
    consecutiveSixes: faker.number.int(3),
    positionBeforeThreeSixes: faker.number.int(2),
    reports: mockReports, // Здесь вы можете добавить фейковые отчеты, если это необходимо
    createdAt: faker.date.recent()
  },
  {
    id: '2',
    fullName: faker.internet.userName(),
    avatar: faker.image.avatar(),
    plan: faker.number.int({ min: 1, max: 72 }),
    previousPlan: faker.number.int({ min: 1, max: 72 }),
    isStart: faker.datatype.boolean(),
    isFinished: faker.datatype.boolean(),
    consecutiveSixes: faker.number.int(3),
    positionBeforeThreeSixes: faker.number.int(2),
    reports: mockReports, // Здесь вы можете добавить фейковые отчеты, если это необходимо
    createdAt: faker.date.recent()
  },
  {
    id: '3',
    fullName: faker.internet.userName(),
    avatar: faker.image.avatar(),
    plan: faker.number.int({ min: 1, max: 72 }),
    previousPlan: faker.number.int({ min: 1, max: 72 }),
    isStart: faker.datatype.boolean(),
    isFinished: faker.datatype.boolean(),
    consecutiveSixes: faker.number.int(3),
    positionBeforeThreeSixes: faker.number.int(2),
    reports: mockReports, // Здесь вы можете добавить фейковые отчеты, если это необходимо
    createdAt: faker.date.recent()
  }
]

export default mockPlayers
