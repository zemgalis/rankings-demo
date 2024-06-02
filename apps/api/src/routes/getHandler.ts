import { Request, Response } from 'express';
import assert, { AssertionError } from 'node:assert';
import { settings } from '../settings'

export const getHandler = (req: Request, res: Response) => {
  const { query } = req;

  try {
    assert.equal(Object.keys(query).length > 0, true, 'Expected to have query params');
    const { regionId } = query;
    assert.equal(typeof regionId === 'string', true, 'Expected required query param to be set');
    assert.equal(Number(regionId) === settings.regionId, true, 'Expected required query param to be set')
    return res.send({ data: { status: 'online' } });
  } catch (error) {
    if (error instanceof AssertionError) {
      res.status(400);
      return res.send({ error: error.message });
    }

    res.status(400);
    return res.send({ error });
  }
};