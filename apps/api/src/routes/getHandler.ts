import { Request, Response } from 'express';
import assert, { AssertionError } from 'node:assert';
import fs from 'node:fs';
import { settings } from '../settings'

export const getHandler = (req: Request, res: Response) => {
  const { query } = req;

  try {
    assert.equal(Object.keys(query).length > 0, true, 'Expected to have query params');
    const { regionId } = query;
    assert.equal(typeof regionId === 'string', true, 'Expected required query param to be set');
    assert.equal(Number(regionId) === settings.regionId, true, 'Expected required query param to be set');
    fs.readFile('./src/data/response.json', 'utf8', (error, data) => {
      if (error) {
        res.status(500).send('Internal Server Error');
        return;
      }

      const content = JSON.parse(data);
      res.json(content);
    });
  } catch (error) {
    if (error instanceof AssertionError) {
      res.status(400);
      return res.send({ error: error.message });
    }

    res.status(400);
    return res.send({ error });
  }
};