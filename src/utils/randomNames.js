import {
  adjectives,
  starWars,
  uniqueNamesGenerator,
} from 'unique-names-generator';

export function getRandomName() {
  return uniqueNamesGenerator({
    dictionaries: [adjectives, starWars],
    length: 2,
    separator: ' ',
    style: 'capital',
  });
}
