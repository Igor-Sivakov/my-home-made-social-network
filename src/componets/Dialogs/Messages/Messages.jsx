import UserItem from '../UserItem/UserItem';
import './Messages.css';

const Messages = ({ state }) => {
  return (
    <div className='message__item'>
      <UserItem state={state} />
      <div className='message__item__innerText'>
        <p className='message__item__text'>{state.message}</p>
      </div>
    </div>
  );
};

export default Messages;
