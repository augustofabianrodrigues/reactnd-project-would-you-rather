import { call, put, take } from 'redux-saga/effects';
import { signUp, signIn, logout, authFlow } from './auth';
import * as api from '../utils/api';
import * as authActions from '../actions/auth';
import { addUser } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

describe('sagas::auth', () => {
  test('signUp', () => {
    const user = {
      name: 'John Doe',
      avatarURL:
        'https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=Heather&clotheType=CollarSweater&eyeType=Side&eyebrowType=UpDown&facialHairColor=Brown&facialHairType=BeardMedium&graphicType=Bat&hairColor=BlondeGolden&hatColor=PastelYellow&mouthType=Eating&skinColor=Pale&topType=WinterHat1',
    };

    const newUser = {
      id: 'johndoe',
      name: 'John Doe',
      avatarURL:
        'https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=Heather&clotheType=CollarSweater&eyeType=Side&eyebrowType=UpDown&facialHairColor=Brown&facialHairType=BeardMedium&graphicType=Bat&hairColor=BlondeGolden&hatColor=PastelYellow&mouthType=Eating&skinColor=Pale&topType=WinterHat1',
      answers: {},
      questions: [],
    };

    const iterator = signUp(user);
    expect(iterator.next().value).toEqual(call(api.addUser, user));
    expect(iterator.next(newUser).value).toEqual(put(addUser(newUser)));
    expect(iterator.next()).toEqual({ done: true, value: newUser });
  });

  test('signIn', () => {
    const userId = 'johndoe';
    expect(signIn(userId).next().value).toEqual(put(setAuthedUser(userId)));
  });

  test('logout', () => {
    expect(logout().next().value).toEqual(put(setAuthedUser(null)));
  });

  test('authFlow', () => {
    const userId = 'johndoe';
    const user = {
      name: 'John Doe',
      avatarURL:
        'https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=Heather&clotheType=CollarSweater&eyeType=Side&eyebrowType=UpDown&facialHairColor=Brown&facialHairType=BeardMedium&graphicType=Bat&hairColor=BlondeGolden&hatColor=PastelYellow&mouthType=Eating&skinColor=Pale&topType=WinterHat1',
    };

    const newUser = {
      id: 'johndoe',
      name: 'John Doe',
      avatarURL:
        'https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=Heather&clotheType=CollarSweater&eyeType=Side&eyebrowType=UpDown&facialHairColor=Brown&facialHairType=BeardMedium&graphicType=Bat&hairColor=BlondeGolden&hatColor=PastelYellow&mouthType=Eating&skinColor=Pale&topType=WinterHat1',
      answers: {},
      questions: [],
    };

    const iterator = authFlow();

    expect(iterator.next().value).toEqual(
      take([authActions.SIGN_IN, authActions.SIGN_UP])
    );
    expect(iterator.next(authActions.signIn(userId)).value).toEqual(
      put(showLoading())
    );
    expect(iterator.next().value).toEqual(call(signIn, userId));
    expect(iterator.next().value).toEqual(put(hideLoading()));
    expect(iterator.next().value).toEqual(take(authActions.LOGOUT));
    expect(iterator.next(authActions.logout()).value).toEqual(call(logout));

    expect(iterator.next().value).toEqual(
      take([authActions.SIGN_IN, authActions.SIGN_UP])
    );
    expect(iterator.next(authActions.signUp(user)).value).toEqual(
      put(showLoading())
    );
    expect(iterator.next().value).toEqual(call(signUp, user));
    expect(iterator.next(newUser).value).toEqual(call(signIn, newUser.id));
    expect(iterator.next().value).toEqual(put(hideLoading()));
    expect(iterator.next().value).toEqual(take(authActions.LOGOUT));
    expect(iterator.next(authActions.logout()).value).toEqual(call(logout));
  });
});
