import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';

export const handlers = [
  rest.get(`/groups`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),

  rest.get('/groups/:id', (req, res, ctx) => {
    const { id } = req.params;

    const matchingStudents = id
      ? students.filter((student) => student.group === id.toUpperCase())
      : students;

    return res(ctx.status(200), ctx.json({ students: matchingStudents }));
  }),

  rest.get('/students/:id', (req, res, ctx) => {
    const { id } = req.params;

    const matchingStudent = id
      ? students.find((student) => student.id === id.toUpperCase())
      : null;

    if (!matchingStudent)
      return res(ctx.status(404), ctx.json({ error: 'No matching student' }));

    return res(ctx.status(200), ctx.json({ students: matchingStudent }));
  }),

  rest.post('/students/search', (req, res, ctx) => {
    const phrase = req.body.searchPhrase;

    const matchedStudents = phrase
      ? students.filter((student) =>
          student.name.toLowerCase().includes(phrase.toLowerCase())
        )
      : [];

    return res(ctx.status(200), ctx.json({ students: matchedStudents }));
  }),
];
