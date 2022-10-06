import { groups } from './groups';
import { students } from './students';
import { auth } from './auth';
import { events } from './events';

export const handlers = [...groups, ...students, ...auth, ...events];
