import React from 'react';
import PropTypes from 'prop-types';
import QuestionCard from './QuestionCard';

function QuestionsGrid({ questions }) {
  return (
    <div className="p-4">
      <div className="h-full w-full max-w-7xl mx-auto grid grid-flow-row auto-rows-auto auto-cols-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}

QuestionsGrid.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default QuestionsGrid;
