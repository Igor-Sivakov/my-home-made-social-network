import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='email' placeholder='email' component='input' />
      </div>
      <div>
        <Field name='password' placeholder='Password' component='input' />
      </div>
      <div>
        <Field name='rememberMe' component='input' type='checkbox' />
        remember me
      </div>
      <div>
        <button>Sign in</button>
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
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
