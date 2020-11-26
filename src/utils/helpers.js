import {
  adjectives,
  starWars,
  uniqueNamesGenerator,
} from 'unique-names-generator';
import avatarOptions from './avatarOptions';

/**
 * Returns the value from a random index from within the array.
 * @param {Array} arr The array to get a random value from.
 */
export function getRandomValueFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Joins the provided url parts with a '/'.
 * @param  {...string} parts The url parts to join.
 */
export function pathJoin(...parts) {
  return parts.join('/').replace(/\/{1,}/g, '/');
}

/**
 * Returns a random nome in the form of "Adjective Star Wars Name".
 */
export function getRandomName() {
  return uniqueNamesGenerator({
    dictionaries: [adjectives, starWars],
    length: 2,
    separator: ' ',
    style: 'capital',
  });
}

/**
 * Returns a random svg avatar url for https://avataaars.io/.
 *
 * https://github.com/fangpenlin/avataaars-api-server.
 */
export function getRandomAvatarUrl() {
  const randomAvatarOptionsQueryString = Object.keys(avatarOptions)
    .map(
      (option) => `${option}=${getRandomValueFromArray(avatarOptions[option])}`
    )
    .join('&');

  return `https://avataaars.io/?${randomAvatarOptionsQueryString}`;
}
