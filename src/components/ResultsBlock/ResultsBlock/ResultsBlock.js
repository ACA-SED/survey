import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import { ANSWER_TYPE, NO_ANSWER_FOR_SURVEY } from '../../../globals/constants';
import CustomPieChart from '../Charts/CustomPieChart/CustomPieChart';
import CustomRangeChart from '../Charts/CustomRangeChart';
import CustomTextChart from '../Charts/CustomTextChart';
import NotFoundBlock from '../../NotFoundBlock';
import PrepareSurveyResults from '../PrepareSurveyResults';
import { useStyles } from './ResultsBlock.style';

function ResultsBlock({ answers, isConnectionError, surveyTitle }) {
  const classes = useStyles();
  const result = PrepareSurveyResults(answers);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography className={classes.surveyTitle} variant="h4">
          {surveyTitle}
        </Typography>
        <Typography component="div">
          {Object.values(result).length > 0 &&
            Object.values(result).map(res => {
              switch (res.type) {
                case ANSWER_TYPE.checkbox:
                  return (
                    <CustomPieChart
                      data={Object.values(res.answers)}
                      key={res.id}
                      title={res.title}
                    />
                  );
                case ANSWER_TYPE.radiobutton:
                  return (
                    <CustomPieChart
                      customText={res.textAnswers}
                      data={Object.values(res.answers)}
                      key={res.id}
                      title={res.title}
                    />
                  );
                case ANSWER_TYPE.dropdown:
                  return (
                    <CustomPieChart
                      data={Object.values(res.answers)}
                      key={res.id}
                      title={res.title}
                    />
                  );
                case ANSWER_TYPE.input:
                  return (
                    <CustomTextChart
                      count={res.textAnswers.length}
                      data={Object.values(res.textAnswers)}
                      key={res.id}
                      title={res.title}
                    />
                  );
                case ANSWER_TYPE.range:
                  return (
                    <CustomRangeChart
                      data={Object.values(res.answers)}
                      endValue={res.endValue}
                      key={res.id}
                      startValue={res.startValue}
                      stepValue={res.stepValue}
                      title={res.title}
                    />
                  );
                default:
                  return (
                    <Card key={uuid()} style={{ marginBottom: 14 }}>
                      <CardContent>
                        <Typography>{NO_ANSWER_FOR_SURVEY}</Typography>
                      </CardContent>
                    </Card>
                  );
              }
            })}
          {!surveyTitle && (
            <NotFoundBlock isConnectionError={isConnectionError} />
          )}
          {surveyTitle && Object.values(result).length === 0 && (
            <Card className={classes.noAnswerCard}>
              <CardContent>
                <Typography variant="h4">{NO_ANSWER_FOR_SURVEY}</Typography>
              </CardContent>
            </Card>
          )}
        </Typography>
      </Container>
    </>
  );
}

ResultsBlock.propTypes = {
  answers: PropTypes.array.isRequired,
  isConnectionError: PropTypes.bool.isRequired,
  surveyTitle: PropTypes.string.isRequired
};

export default ResultsBlock;
