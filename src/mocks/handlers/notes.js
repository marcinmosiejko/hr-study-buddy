import { rest } from 'msw';
import { db } from 'mocks/db';
import { faker } from '@faker-js/faker';

export const notes = [
  rest.get(`/notes`, (req, res, ctx) => {
    const notes = db.note.getAll();
    return res(ctx.status(200), ctx.json({ notes }));
  }),

  rest.post('/notes', (req, res, ctx) => {
    const { title, content } = req.body;

    if (!(title && content))
      return res(
        ctx.status(200),
        ctx.json({ error: 'Every note needs to contain title and content' })
      );

    const newNote = { id: faker.datatype.uuid(), title, content };
    db.note.create(newNote);

    return res(ctx.status(201), ctx.json({ note: newNote }));
  }),

  rest.delete('/notes', (req, res, ctx) => {
    const { id } = req.body;

    if (!id)
      return res(
        ctx.status(200),
        ctx.json({ error: 'Please provide ID to delete a note' })
      );

    const removedNote = db.note.delete({
      where: { id: { equals: id } },
    });
    return res(ctx.status(200), ctx.json({ removedNote }));
  }),
];
