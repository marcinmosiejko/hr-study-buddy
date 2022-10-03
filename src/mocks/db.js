import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

faker.seed(123);

const groups = ['A', 'B', 'C'];
const eventTypes = ['workshop', 'exam', 'lecture'];
const getRandomValue = (array, index) => array[index];
const getRandomAverage = () =>
  faker.datatype.number({ min: 2, max: 5, precision: 0.1 });

// Each key in a passed object is a model in our db
export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.name.fullName(),
    attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}`,
    average: () => getRandomAverage(),
    group: () =>
      getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
    course: () =>
      `${faker.word
        .adjective()
        .replace(/\b(\w)/g, (s) => s.toUpperCase())} Systems`,
    grades: () => [
      {
        subject: 'Business Philosphy',
        average: getRandomAverage(),
      },
      {
        subject: 'Marketing',
        average: getRandomAverage(),
      },
      {
        subject: 'Modern Economy',
        average: getRandomAverage(),
      },
    ],
  },

  group: {
    id: primaryKey(String),
  },

  event: {
    id: primaryKey(faker.datatype.uuid),
    type: () =>
      getRandomValue(eventTypes, faker.datatype.number({ min: 0, max: 2 })),
    group: () =>
      getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
    subject: () => `${faker.company.bsAdjective()} ${faker.company.bsNoun()}`,
    date: faker.date.soon,
  },
});
