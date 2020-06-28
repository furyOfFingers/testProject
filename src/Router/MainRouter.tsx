import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, RouteProps } from 'react-router-dom';
import LoginPage from '../Modules/Authorization/LoginPage/LoginPage';
import SigninPage from '../Modules/Authorization/SigninPage/SigninPage';
import MainPage from '../Modules/MainPage/MainPage';
import TestsAndQuestions from '../Modules/TestsAndQuestions/TestsAndQuestions';
import { history } from '../Store/Store';

interface IMainRouterProps extends RouteProps {
  auth: any;
}

function MainRouter(props: IMainRouterProps) {
  return (
    <Router history={history}>
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          {/* {props.auth ? ( */}
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/signin' component={SigninPage} />
          {/* ) : ( */}
          <Route exact path='/mainpage' component={MainPage} />
          <Route exact path='/testsandquestions' component={TestsAndQuestions} />
          {/* )} */}
        </Switch>
      </Suspense>
    </Router>
  );
}

const mapStateToProps = (state: any): IMainRouterProps => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MainRouter);
