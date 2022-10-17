import './ProfileDataForm.css';
import { reduxForm, Field } from 'redux-form';
import { FormElementConstructor } from '../../../common/formContrlos/formControls';

const ProfileDataFormTop = (props) => {
  const Input = FormElementConstructor('input');
  const Textarea = FormElementConstructor('textarea');

  return (
    <form className='profile-form' onSubmit={props.handleSubmit}>
      <label>
        Full name:
        <Field
          name='fullName'
          placeholder='Enter your name...'
          validate={[]}
          component={Input}
          className='profile-form__input'
        />
      </label>
      <label>
        About me:
        <Field
          name='aboutMe'
          placeholder='A few words about yourself...'
          validate={[]}
          component={Textarea}
          className='profile-form__textarea'
        />
      </label>
      <label>
        My professional skills:
        <Field
          name='lookingForAJobDescription'
          placeholder='Your professional skills...'
          validate={[]}
          component={Textarea}
          className='profile-form__textarea'
        />
      </label>
      <button className='profile-form__btn profile-form__btn_margMod btn'>
        Submit
      </button>
    </form>
  );
};

const ReduxProfileDataFormTop = reduxForm({
  form: 'edit-profile-top',
  enableReinitialize: true,
  destroyOnUnmount: false,
})(ProfileDataFormTop);

const ProfileDataFormBottom = (props) => {
  const Input = FormElementConstructor('input');
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        My home place:
        <Field
          name='homePlace'
          placeholder='Where do you live?'
          validate={[]}
          component={Input}
          className='profile-form__input'
        />
      </label>
      <label>
        Where did I study:
        <Field
          name='education'
          placeholder='Your alma mater...'
          validate={[]}
          component={Input}
          className='profile-form__input'
        />
      </label>
      <button className='profile-form__btn btn'>Submit</button>
    </form>
  );
};

const ReduxProfileDataFormBottom = reduxForm({
  form: 'edit-profile-bottom',
  enableReinitialize: true,
  destroyOnUnmount: false,
})(ProfileDataFormBottom);

const ProfileDataForm = (props) => {
  const onSubmitAPI = (formData) => {
    props.saveProfileUpdate(formData);
    props.setEditMod(false);
  };
  const onSubmitState = (formData) => {
    props.updateProfileExtraState(formData);
    props.setEditMod(false);
  };

  return (
    <div className='profile-dataForm__wrapper'>
      {props.editModForm ? (
        <ReduxProfileDataFormTop
          initialValues={props.profile}
          onSubmit={onSubmitAPI}
        />
      ) : (
        <ReduxProfileDataFormBottom
          initialValues={props.profileExtra}
          onSubmit={onSubmitState}
        />
      )}
    </div>
  );
};

export default ProfileDataForm;
