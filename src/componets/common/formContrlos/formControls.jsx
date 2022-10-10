import './formControls.css';

export const FormElementConstructor =
  (Element) =>
  ({ input, meta: { touched, error }, ...props }) => {
    let hasError = touched && error;
    return (
      <div className={hasError ? '_error' : ''}>
        <Element {...input} {...props} />
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
