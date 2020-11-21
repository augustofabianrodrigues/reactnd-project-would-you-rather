import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { call, put } from 'redux-saga/effects';
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';
import { getInitialData } from '../utils/api';
import { handleInitialData } from './shared';

test('handleInitialData put showLoading, call getInitialData, put receiveUsers, put receiveQuestions, and call hideLoading', () => {
  const users = {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL:
        'https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=BlazerSweater&eyeType=Hearts&eyebrowType=UnibrowNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Deer&hairColor=Brown&hatColor=PastelRed&mouthType=Smile&skinColor=Light&topType=LongHairStraight',
      answers: {
        '8xf0y6ziyjabvozdd253nd': 'optionOne',
        '6ni6ok3ym7mf1p33lnez': 'optionTwo',
        am8ehyc8byjqgar0jgpub9: 'optionTwo',
        loxhs1bqm25b708cmbf3g: 'optionTwo',
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
    },
    tylermcginnis: {
      id: 'tylermcginnis',
      name: 'Tyler McGinnis',
      avatarURL:
        'https://avataaars.io/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=Gray01&clotheType=ShirtScoopNeck&eyeType=Happy&eyebrowType=FlatNatural&facialHairColor=Black&facialHairType=BeardMedium&graphicType=Cumbia&hairColor=Black&hatColor=Gray01&mouthType=Smile&skinColor=Light&topType=ShortHairShortRound',
      answers: {
        vthrdm985a262al8qx3do: 'optionOne',
        xj352vofupe1dqz9emx13r: 'optionTwo',
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
      id: 'johndoe',
      name: 'John Doe',
      avatarURL:
        'https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=Heather&clotheType=CollarSweater&eyeType=Side&eyebrowType=UpDown&facialHairColor=Brown&facialHairType=BeardMedium&graphicType=Bat&hairColor=BlondeGolden&hatColor=PastelYellow&mouthType=Eating&skinColor=Pale&topType=WinterHat1',
      answers: {
        xj352vofupe1dqz9emx13r: 'optionOne',
        vthrdm985a262al8qx3do: 'optionTwo',
        '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      },
      questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    },
  };

  const questions = {
    '8xf0y6ziyjabvozdd253nd': {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'sarahedo',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['sarahedo'],
        text: 'have horrible short term memory',
      },
      optionTwo: {
        votes: [],
        text: 'have horrible long term memory',
      },
    },
    '6ni6ok3ym7mf1p33lnez': {
      id: '6ni6ok3ym7mf1p33lnez',
      author: 'johndoe',
      timestamp: 1468479767190,
      optionOne: {
        votes: [],
        text: 'become a superhero',
      },
      optionTwo: {
        votes: ['johndoe', 'sarahedo'],
        text: 'become a supervillain',
      },
    },
    am8ehyc8byjqgar0jgpub9: {
      id: 'am8ehyc8byjqgar0jgpub9',
      author: 'sarahedo',
      timestamp: 1488579767190,
      optionOne: {
        votes: [],
        text: 'be telekinetic',
      },
      optionTwo: {
        votes: ['sarahedo'],
        text: 'be telepathic',
      },
    },
    loxhs1bqm25b708cmbf3g: {
      id: 'loxhs1bqm25b708cmbf3g',
      author: 'tylermcginnis',
      timestamp: 1482579767190,
      optionOne: {
        votes: [],
        text: 'be a front-end developer',
      },
      optionTwo: {
        votes: ['sarahedo'],
        text: 'be a back-end developer',
      },
    },
    vthrdm985a262al8qx3do: {
      id: 'vthrdm985a262al8qx3do',
      author: 'tylermcginnis',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['tylermcginnis'],
        text: 'find $50 yourself',
      },
      optionTwo: {
        votes: ['johndoe'],
        text: 'have your best friend find $500',
      },
    },
    xj352vofupe1dqz9emx13r: {
      id: 'xj352vofupe1dqz9emx13r',
      author: 'johndoe',
      timestamp: 1493579767190,
      optionOne: {
        votes: ['johndoe'],
        text: 'write JavaScript',
      },
      optionTwo: {
        votes: ['tylermcginnis'],
        text: 'write Swift',
      },
    },
  };

  const iterator = handleInitialData();

  expect(iterator.next().value).toEqual(put(showLoading()));
  expect(iterator.next().value).toEqual(call(getInitialData));
  expect(iterator.next({ users, questions }).value).toEqual(
    put(receiveUsers(users))
  );
  expect(iterator.next().value).toEqual(put(receiveQuestions(questions)));
  expect(iterator.next().value).toEqual(put(hideLoading()));
});
