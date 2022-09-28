import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';

export const handlers = [
  rest.get(`/groups`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),

  rest.get('/students/:group', (req, res, ctx) => {
    const { group } = req.params;

    const matchingStudents = group
      ? students.filter((student) => student.group === group.toUpperCase())
      : students;

    return res(ctx.status(200), ctx.json({ students: matchingStudents }));
  }),

  rest.post('/students/search', (req, res, ctx) => {
    const phrase = req.body.searchPhrase;
    console.log(phrase);

    const matchedStudents = phrase
      ? students.filter((student) =>
          student.name.toLowerCase().includes(phrase.toLowerCase())
        )
      : [];

    console.log(matchedStudents);

    return res(ctx.status(200), ctx.json({ students: matchedStudents }));
  }),
];
