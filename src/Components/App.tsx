import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  handleCancel,
  changeFirstName,
  changeSecondName,
} from '../store/actions';
import { IFieldState, IFirstNameProps, ISecondNameProps } from '../Types/Types';
import Button from './Button';
import '../styles/index.css';
import Input from './Input';

interface IInputFormProps {
  firstName: IFirstNameProps;
  secondName: ISecondNameProps;
  handleCancel: any;
  changeFirstName: any;
  changeSecondName: any;
}

class App extends React.Component<IInputFormProps, {}> {
  render() {
    const {
      firstName,
      secondName,
      handleCancel,
      changeFirstName,
      changeSecondName,
    } = this.props;

    function handleClickSubmit(): void {
      console.log('handleClickSubmit clicked');
    }

    return (
      <>
        <Form className="mr-1">
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'></Form.Group>
        </Form>

        <div className='app'>
          <Input
            value={firstName}
            type='text'
            placeholder='First Name'
            onChange={(event) => {
              changeFirstName(event.target.value);
            }}
          />

          <Input
            value={secondName}
            type='text'
            placeholder='Second Name'
            onChange={(event) => {
              changeSecondName(event.target.value);
            }}
          />

          <div className='output_field'>{`${firstName} ${secondName}`}</div>

          <div className='button_block'>
            <Button className='red' text={'Cancel'} onClick={handleCancel} />

            <Button
              className='green'
              text={'Submit'}
              onClick={handleClickSubmit}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: IFieldState) => {
  return {
    firstName: state.firstName,
    secondName: state.secondName,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch),
    handleCancel: bindActionCreators(handleCancel, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
