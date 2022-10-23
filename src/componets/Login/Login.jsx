import './Login.css';
import { reduxForm, Field } from 'redux-form';
import { minMaxLengthCreator, required } from '../utils/validators';
import { FormElementConstructorInput } from '../common/formContrlos/formControls';
import { NavLink } from 'react-router-dom';

const LoginForm = ({ handleSubmit, captchaUrl, error }) => {
  const maxLength = minMaxLengthCreator(3, 30);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign in</h2>
      <div>
        <Field
          name='email'
          placeholder='email'
          validate={[required, maxLength]}
          component={FormElementConstructorInput}
          className='login-form__input'
        />
      </div>
      <div>
        <Field
          name='password'
          placeholder='Password'
          validate={[required, maxLength]}
          component={FormElementConstructorInput}
          className='login-form__input'
        />
      </div>
      {captchaUrl && <img src={captchaUrl} alt='captcha' />}
      {captchaUrl && (
        <Field
          name='captcha'
          placeholder='Enter symbols from image...'
          validate={[required]}
          component={FormElementConstructorInput}
          className='login-form__input'
        />
      )}
      {error && <div className='login-form__summeryError'>{error}</div>}
      <div className='login-form__checkbox__container'>
        <Field
          name='rememberMe'
          component={FormElementConstructorInput}
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

const Login = ({ signIn, captchaUrl }) => {
  const onSubmit = (formData) => {
    signIn(formData);
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <div className='login-form__wrapper'>
        <ReduxLoginForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Login;
