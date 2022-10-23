import './GlobalErrorMessage.css';

const GlobalErrorMessage = ({ error }) => {
  return (
    <div className='global-error-message__container'>
      <div className='global-error-message'>
        <div className='global-error-message__lable'>
          Ups, something went wrong :
        </div>
        {error}
      </div>
    </div>
  );
};

export default GlobalErrorMessage;
