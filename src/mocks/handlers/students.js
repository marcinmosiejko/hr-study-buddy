import { rest } from 'msw';
import { db } from 'mocks/db';

export const students = [
  rest.get('/students/:id', (req, res, ctx) => {
    const { id } = req.params;

    const matchingStudent = id
      ? db.student.findFirst({
          where: {
            id: {
              equals: id,
            },
          },
        })
      : null;

    if (!matchingStudent)
      return res(ctx.status(404), ctx.json({ error: 'No matching student' }));

    return res(ctx.status(200), ctx.json({ students: matchingStudent }));
  }),

  rest.post('/students/search', (req, res, ctx) => {
    const phrase = req.body.searchPhrase;
    console.log(phrase.toLowerCase());
    const matchedStudents = phrase
      ? db.student.findMany({
          where: {
            name: {
              contains: phrase,
            },
          },
        })
      : [];

    return res(ctx.status(200), ctx.json({ students: matchedStudents }));
  }),
];
