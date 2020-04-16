import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from '../About';
import CreateSurvey from '../CreateSurvey';
import Footer from '../../Components/Footer';
import Contacts from '../Contacts';
import Header from '../../Components/Header';
import Home from '../Home';
import Results from '../Results';
import SingleSurveyAnswers from '../../Components/SingleSurveyAnswers';
import ROUTES from '../../Routes/Routes';
import SurveyContext from '../../State/context';
import { surveyReducer } from '../../State/reducer';
import TakeSurvey from '../TakeSurvey';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [stateSurvey, dispatchSurvey] = useReducer(surveyReducer, []);

  return (
    <div className={classes.mainContainer}>
      <SurveyContext.Provider value={{ stateSurvey, dispatchSurvey }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path={ROUTES.home}>
              <Home />
            </Route>
            <Route path={ROUTES.create}>
              <CreateSurvey />
            </Route>
            <Route path={ROUTES.survey}>
              <TakeSurvey />
            </Route>
            <Route exact path={ROUTES.results}>
              <Results />
            </Route>
            <Route exact path={`${ROUTES.results}/:surveyId`}>
              <SingleSurveyAnswers />
            </Route>
            <Route path={ROUTES.about}>
              <About />
            </Route>
            <Route path={ROUTES.contacts}>
              <Contacts />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </SurveyContext.Provider>
    </div>
  );
}

export default Main;
