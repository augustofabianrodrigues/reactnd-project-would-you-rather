import { receiveUsers, addUser } from '../actions/users';
import users from './users';

test('receiveUsers', () => {
  const users1 = {
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
  };
  const users2 = {
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

  let nextState = users(undefined, receiveUsers(users1));
  expect(nextState).toEqual(users1);
  nextState = users(nextState, receiveUsers(users2));
  expect(nextState).toEqual({ ...users1, ...users2 });
});

test('addUser', () => {
  const initialState = {
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
  };

  const user = {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL:
      'https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=Heather&clotheType=CollarSweater&eyeType=Side&eyebrowType=UpDown&facialHairColor=Brown&facialHairType=BeardMedium&graphicType=Bat&hairColor=BlondeGolden&hatColor=PastelYellow&mouthType=Eating&skinColor=Pale&topType=WinterHat1',
    answers: {},
    questions: [],
  };

  expect(users(initialState, addUser(user))).toEqual({
    ...initialState,
    [user.id]: user,
  });
});
