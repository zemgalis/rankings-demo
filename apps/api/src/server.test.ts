import { createServer } from './server';

describe('server', () => {
  test('creates server app', async () => {
    const app = createServer();
    expect(app).toBeDefined();  
  });
})