import React from 'react';
import PropTypes from 'prop-types';

import CheckboxSection from '../CheckboxSection';
import DropdownSection from '../DropdownSection';
import InputSection from '../InputSection';
import RadiobuttonSection from '../RadiobuttonSection';
import RangeSection from '../RangeSection';
import { useStyles } from './AnswerSection.style';

function AnswerSection({
  type,
  answerType,
  inputType,
  answers,
  hasLastInput,
  startValue,
  endValue,
  stepValue
}) {
  const classes = useStyles();

  const showType = typeToShow => {
    switch (typeToShow) {
      case 'INPUT':
        return <InputSection inputType={inputType} />;
      case 'RADIOBUTTON':
        return (
          <RadiobuttonSection answers={answers} hasLastInput={hasLastInput} />
        );
      case 'CHECKBOX':
        return <CheckboxSection answers={answers} />;
      case 'DROPDOWN':
        return <DropdownSection answers={answers} />;
      case 'RANGE':
        return (
          <RangeSection
            startValue={startValue}
            endValue={endValue}
            stepValue={stepValue}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={classes.answerSectionContainer}>
      {showType(answerType || type)}
    </div>
  );
}

AnswerSection.propTypes = {
  answerType: PropTypes.string,
  inputType: PropTypes.string,
  answers: PropTypes.array,
  hasLastInput: PropTypes.bool,
  startValue: PropTypes.string,
  endValue: PropTypes.string,
  stepValue: PropTypes.string,
  type: PropTypes.string.isRequired
};

AnswerSection.defaultProps = {
  answerType: '',
  inputType: '',
  answers: [],
  hasLastInput: false,
  startValue: '',
  endValue: '',
  stepValue: ''
};

export default AnswerSection;
