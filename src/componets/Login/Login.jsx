import './Login.css';
import { reduxForm, Field } from 'redux-form';
import { minMaxLengthCreator, required } from '../utils/validators';
import { FormElementConstructor } from '../common/formContrlos/formControls';
import { NavLink } from 'react-router-dom';

const LoginForm = (props) => {
  let maxLength = minMaxLengthCreator(3, 30);
  let Input = FormElementConstructor('input');
  return (
    <form onSubmit={props.handleSubmit}>
      <h2>Sign in</h2>
      <div>
        <Field
          name='email'
          placeholder='email'
          validate={[required, maxLength]}
          component={Input}
          className='login-form__input'
        />
      </div>
      <div>
        <Field
          name='password'
          placeholder='Password'
          validate={[required, maxLength]}
          component={Input}
          className='login-form__input'
        />
      </div>
      {props.error && (
        <div className='login-form__summeryError'>{props.error}</div>
      )}
      <div className='login-form__checkbox__container'>
        <Field
          name='rememberMe'
          component={Input}
          type='checkbox'
          className='login-form__checkbox'
        />
        remember me
      </div>
      <div>
        <button className='login-form__btn btn'>Sign in</button>
      </div>
      <div className='login-form__linkToSignUp__container'>
        <NavLink to={'#'}>Forget password - Sign up</NavLink>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.signIn(formData);
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <div className='login-form__wrapper'>
        <ReduxLoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Login;
