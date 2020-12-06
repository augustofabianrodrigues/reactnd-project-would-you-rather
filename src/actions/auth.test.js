import { SIGN_IN, signIn, SIGN_UP, signUp, LOGOUT, logout } from './auth';

test('signIn', () => {
  const userId = 'johndoe';

  expect(signIn(userId)).toEqual({
    type: SIGN_IN,
    payload: { userId, referrer: undefined },
  });

  expect(signIn(userId, '/home')).toEqual({
    type: SIGN_IN,
    payload: { userId, referrer: '/home' },
  });
});

test('signUp', () => {
  const user = {
    name: 'John Doe',
    avatarURL:
      'https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=Heather&clotheType=CollarSweater&eyeType=Side&eyebrowType=UpDown&facialHairColor=Brown&facialHairType=BeardMedium&graphicType=Bat&hairColor=BlondeGolden&hatColor=PastelYellow&mouthType=Eating&skinColor=Pale&topType=WinterHat1',
  };

  expect(signUp(user)).toEqual({
    type: SIGN_UP,
    payload: {
      user: {
        name: 'John Doe',
        avatarURL:
          'https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=Heather&clotheType=CollarSweater&eyeType=Side&eyebrowType=UpDown&facialHairColor=Brown&facialHairType=BeardMedium&graphicType=Bat&hairColor=BlondeGolden&hatColor=PastelYellow&mouthType=Eating&skinColor=Pale&topType=WinterHat1',
      },
      referrer: undefined,
    },
  });

  expect(signUp(user, '/add')).toEqual({
    type: SIGN_UP,
    payload: {
      user: {
        name: 'John Doe',
        avatarURL:
          'https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=Heather&clotheType=CollarSweater&eyeType=Side&eyebrowType=UpDown&facialHairColor=Brown&facialHairType=BeardMedium&graphicType=Bat&hairColor=BlondeGolden&hatColor=PastelYellow&mouthType=Eating&skinColor=Pale&topType=WinterHat1',
      },
      referrer: '/add',
    },
  });
});

test('logout', () => {
  expect(logout()).toEqual({
    type: LOGOUT,
  });
});
