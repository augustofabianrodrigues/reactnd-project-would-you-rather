import {
  getRandomAvatarUrl,
  getRandomName,
  getRandomValueFromArray,
  pathJoin,
} from './helpers';

describe('utils::helpers', () => {
  test('getRandomValueFromArray', () => {
    // Test for cases when it should always return the same value
    expect(getRandomValueFromArray([1])).toEqual(1);
    expect(getRandomValueFromArray([])).toEqual(undefined);

    // Test for cases when the value can be any of a finite list.
    expect(['a', 'b']).toContain(getRandomValueFromArray(['a', 'b']));
    expect(['a', 'b', 'c']).toContain(getRandomValueFromArray(['a', 'b', 'c']));
  });

  test('pathJoin', () => {
    expect(pathJoin('/', '/sign-up')).toEqual('/sign-up');
    expect(pathJoin('/', '/')).toEqual('/');
    expect(pathJoin('test')).toEqual('test');
    expect(pathJoin('test', '2')).toEqual('test/2');
  });

  test('getRandomName', () => {
    expect(typeof getRandomName()).toBe('string');
  });

  test('getRandomAvatarUrl', () => {
    expect(typeof getRandomAvatarUrl()).toBe('string');
  });
});
