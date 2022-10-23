import './ProfileDataForm.css';
import { reduxForm, Field } from 'redux-form';
import {
  FormElementConstructorInput,
  FormElementConstructorTextarea,
} from '../../../common/formContrlos/formControls';
import { minMaxLengthCreator, required } from '../../../utils/validators';

const ProfileDataFormTop = ({ handleSubmit }) => {
  const minMaxLengthTextArea = minMaxLengthCreator(5, 200);
  const minMaxLengthInput = minMaxLengthCreator(2, 30);
  return (
    <form className='profile-form' onSubmit={handleSubmit}>
      <label>
        Full name:
        <Field
          name='fullName'
          placeholder='Enter your name...'
          validate={[required, minMaxLengthInput]}
          component={FormElementConstructorInput}
          className='profile-form__input'
        />
      </label>
      <label>
        About me:
        <Field
          name='aboutMe'
          placeholder='A few words about yourself...'
          validate={[required, minMaxLengthTextArea]}
          component={FormElementConstructorTextarea}
          className='profile-form__textarea'
        />
      </label>
      <label>
        My professional skills:
        <Field
          name='lookingForAJobDescription'
          placeholder='Your professional skills...'
          validate={[required, minMaxLengthTextArea]}
          component={FormElementConstructorTextarea}
          autoFocus={true}
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

const ProfileDataFormBottom = ({ handleSubmit }) => {
  const minMaxLength = minMaxLengthCreator(3, 30);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        My home place:
        <Field
          name='homePlace'
          placeholder='Where do you live?'
          validate={[required, minMaxLength]}
          component={FormElementConstructorInput}
          className='profile-form__input'
        />
      </label>
      <label>
        Where did I study:
        <Field
          name='education'
          placeholder='Your alma mater...'
          validate={[required]}
          component={FormElementConstructorInput}
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

const ProfileDataForm = ({
  editModForm,
  setEditMod,
  saveProfileUpdate,
  updateProfileExtraState,
  ...props
}) => {
  const onSubmitAPI = (formData) => {
    saveProfileUpdate(formData);
    setEditMod(false);
  };
  const onSubmitState = (formData) => {
    updateProfileExtraState(formData);
    setEditMod(false);
  };

  return (
    <div className='profile-dataForm__wrapper'>
      {editModForm ? (
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
