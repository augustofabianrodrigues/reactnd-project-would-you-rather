import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserSelectList from './UserSelectList';

function SignIn(props) {
  const { signUpUrl } = props;
  const users = [
    {
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
    {
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
    {
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
  ];

  return (
    <form className="w-full flex flex-col space-y-8">
      <h3 className="text-xl font-semibold uppercase text-purple-700">
        Sign In
      </h3>

      <UserSelectList users={users} />

      <div className="flex flex-row flex-nowrap w-full items-center">
        <span className="flex-grow h-px rounded bg-gray-400" />
        <span className="px-2 uppercase font-medium">Or</span>
        <span className="flex-grow h-px rounded bg-gray-400" />
      </div>

      <Link
        to={signUpUrl}
        className="block w-full py-2 px-4 border border-indigo-300 dark:border-indigo-800 rounded text-white font-medium text-center uppercase focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gradient-to-r from-indigo-600 to-purple-600"
      >
        Sign Up
      </Link>
    </form>
  );
}

SignIn.propTypes = {
  signUpUrl: PropTypes.string.isRequired,
};

export default SignIn;
