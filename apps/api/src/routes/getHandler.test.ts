import supertest from 'supertest';
import { createServer } from '../server';

describe('getHandler', () => {
  test('GET / with no query parameters', async () => {
    const app = createServer();
    await supertest(app)
      .get('/')
      .expect(400)
      .expect({ error: 'Expected to have query params' });
  });
  test('GET / with invalid query parameter', async () => {
    const app = createServer();
    await supertest(app)
      .get('/?regionId')
      .expect(400)
      .expect({ error: 'Expected required query param to be set' });

      await supertest(app)
      .get('/?regionId=100')
      .expect(400)
      .expect({ error: 'Expected required query param to be set' });
  });
  test('GET / with valid query parameter', async () => {
    const app = createServer();
    await supertest(app)
      .get('/?regionId=170')
      .expect(200);
  });
});