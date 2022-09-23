import './formControls.css';

export const FormElementConstructor =
  (Element) =>
  ({ input, meta, ...props }) => {
    let hasError = meta.touched && meta.error;
    return (
      <div className={hasError ? '_error' : ''}>
        <Element {...input} {...props} />
        {hasError && <span>{meta.error}</span>}
      </div>
    );
  };

export const TextareaForMessages = ({ input, meta, ...props }) => {
  let hasError = meta.touched && meta.error;
  return (
    <div
      className={
        hasError
          ? 'editStyleForMsgForm editStyleForMsgForm_error'
          : 'editStyleForMsgForm'
      }
    >
      <textarea {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
