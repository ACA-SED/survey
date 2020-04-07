import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import removeSpaces from '../../../Helpers/removeSpaces';
import { useStyles } from './OptionsContainer.style';

const CHECKBOX_LABEL = 'Add an input field as the last option';
const INPUT_LABEL = 'Option';
const INPUT_TOOLTIP_LABEL = 'Input custom option name';

function OptionsContainer({ type }) {
  const classes = useStyles();
  const inputEl = useRef(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isTyped, setIsTyped] = useState(false);
  const [option, setOption] = useState('');
  const [options, setOptions] = useState([]);
  const [chip, setChip] = useState({});
  const [checked, setChecked] = useState(false);
  const [isTooltip, setIsTooltip] = useState(false);
  const [customOptionId, setCustomOptionId] = useState('');

  const handleInputChange = event => {
    setOption(event.target.value);

    if (!removeSpaces(event.target.value)) {
      setIsEmpty(true);

      setIsTyped(false);
    } else {
      setIsEmpty(false);

      setIsTyped(true);
    }
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      const filteredOption = removeSpaces(option);
      const id = uuid();

      if (filteredOption) {
        setOptions(
          chip.id
            ? options.map(opt =>
                opt.id === chip.id
                  ? { id: chip.id, option: filteredOption }
                  : opt
              )
            : [...options, { id, option: filteredOption }]
        );

        setOption('');

        setChip({});

        setIsTyped(false);

        if (checked && !customOptionId) {
          setCustomOptionId(id);

          setIsTooltip(false);
        }
      } else setIsEmpty(true);

      if (checked) {
        setOptions(prevState => {
          const optionId = customOptionId || id;
          const lastOption = prevState.find(opt => opt.id === optionId);
          const filteredOptions = prevState.filter(
            opt => opt.id !== lastOption.id
          );

          return [...filteredOptions, lastOption];
        });
      }
    }
  };

  const handleClick = chipToEdit => () => {
    if (!isTyped) {
      setOption(chipToEdit.option);

      setChip(chipToEdit);

      setIsEmpty(false);

      inputEl.current.focus();
    }
  };

  const handleDelete = chipToDelete => () => {
    setOptions(() => options.filter(opt => opt.id !== chipToDelete));

    if (customOptionId === chipToDelete) {
      setChecked(false);

      setCustomOptionId('');
    }
  };

  const handleCheckboxChange = event => {
    setChecked(event.target.checked);

    if (event.target.checked) {
      inputEl.current.focus();

      setIsTooltip(true);
    } else {
      setIsTooltip(false);

      setOptions(options.filter(opt => opt.id !== customOptionId));

      setCustomOptionId('');
    }
  };

  return (
    <div className={classes.optionsContainer}>
      <div className={classes.inputWrapper}>
        <div className={classes.textFieldWrapper}>
          <Tooltip
            open={isTooltip}
            placement="top-start"
            title={INPUT_TOOLTIP_LABEL}
            TransitionComponent={Zoom}
          >
            <TextField
              autoFocus
              error={isEmpty}
              id="outlined-basic"
              inputRef={inputEl}
              fullWidth
              label={INPUT_LABEL}
              onChange={e => handleInputChange(e)}
              onKeyDown={handleSubmitOnEnter}
              value={option}
              variant="outlined"
            />
          </Tooltip>
        </div>
      </div>
      <div className={classes.chipsWrapper}>
        <div className={classes.root}>
          {options.map(opt => (
            <Tooltip
              arrow
              key={opt.id}
              title={opt.option}
              TransitionComponent={Zoom}
            >
              <Chip
                className={classes.chip}
                clickable
                color="primary"
                label={opt.option}
                onClick={handleClick(opt)}
                onDelete={handleDelete(opt.id)}
              />
            </Tooltip>
          ))}
        </div>
      </div>
      {type === 'addInput' ? (
        <div className={classes.checkboxWrapper}>
          <div className={classes.checkboxSection}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleCheckboxChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label={CHECKBOX_LABEL}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

OptionsContainer.propTypes = {
  type: PropTypes.string
};

OptionsContainer.defaultProps = {
  type: ''
};

export default OptionsContainer;
