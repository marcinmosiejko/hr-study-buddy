import { rest } from 'msw';
import { db } from 'mocks/db';

export const events = [
  rest.get(`/events`, (req, res, ctx) => {
    const events = db.event.getAll();
    return res(ctx.status(200), ctx.json({ events }));
  }),

  rest.get('/events/:group', (req, res, ctx) => {
    const { group } = req.params;

    const matchingEvents = group
      ? db.event.findMany({
          where: {
            group: {
              equals: group.toUpperCase(),
            },
          },
        })
      : db.event.findAll();

    return res(ctx.status(200), ctx.json({ events: matchingEvents }));
  }),
];
