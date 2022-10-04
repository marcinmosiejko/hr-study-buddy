import { rest } from 'msw';
import { db } from 'mocks/db';

export const groups = [
  rest.get(`/groups`, (req, res, ctx) => {
    const groups = db.group.getAll();
    return res(ctx.status(200), ctx.json({ groups }));
  }),

  rest.get('/groups/:id', (req, res, ctx) => {
    const { id } = req.params;

    const matchingStudents = id
      ? db.student.findMany({
          where: {
            group: {
              equals: id.toUpperCase(),
            },
          },
        })
      : db.student.findAll();

    return res(ctx.status(200), ctx.json({ students: matchingStudents }));
  }),
];
