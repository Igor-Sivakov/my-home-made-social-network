import UserItem from '../UserItem/UserItem';
import './Messages.css';

const Messages = (props) => {
  return (
    <div className='message__item'>
      <UserItem state={props.state} />
      <div className='message__item__innerText'>
        <p className='message__item__text'>{props.state.message}</p>
      </div>
    </div>
  );
};

export default Messages;
