import './formControls.css';

/* export const FormElementConstructor =
  (Element) =>
  ({ input, meta: { touched, error }, ...props }) => {
    let hasError = touched && error;
    return (
      <div className={hasError ? '_error' : ''}>
        <Element {...input} {...props} />
        {hasError && <span>{error}</span>}
      </div>
    );
  }; */

/* !!! ------------> if we create a universal constructor for elements like that on the top, when typing text at each error or each validation the focus drops. If we will use the autofocus, then the focus will jump to another element when the validation is triggered during the text input. <------------- !!! */

export const FormElementConstructorTextarea = ({
  input,
  meta: { touched, error },
  ...props
}) => {
  let hasError = touched && error;
  return (
    <div className={hasError ? '_error' : ''}>
      <textarea {...input} {...props} />
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const FormElementConstructorInput = ({
  input,
  meta: { touched, error },
  ...props
}) => {
  let hasError = touched && error;
  return (
    <div className={hasError ? '_error' : ''}>
      <input {...input} {...props} />
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const TextareaForMessages = ({
  input,
  meta: { touched, error },
  ...props
}) => {
  let hasError = touched && error;
  return (
    <div
      className={
        hasError
          ? 'editStyleForMsgForm editStyleForMsgForm_error'
          : 'editStyleForMsgForm'
      }
    >
      <textarea {...input} {...props} />
      {hasError && <span>{error}</span>}
    </div>
  );
};
