import { pathJoin } from './helpers';

describe('utils::helpers', () => {
  test('pathJoin', () => {
    expect(pathJoin('/', '/sign-up')).toEqual('/sign-up');
    expect(pathJoin('/', '/')).toEqual('/');
    expect(pathJoin('test')).toEqual('test');
    expect(pathJoin('test', '2')).toEqual('test/2');
  });
});
