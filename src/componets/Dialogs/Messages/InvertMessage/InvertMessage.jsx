import UserItem from '../../UserItem/UserItem';
import './InvertMessage.css';

const InvertMessage = (props) => {
  return (
    <div className='invertMessage__decoration'>
      <div className='invertMessage__item'>
        <div className='invertMessage__item__innerText'>
          <p className='invertMessage__item__text'>{props.state.message}</p>
        </div>
        <UserItem state={props.state} />
      </div>
    </div>
  );
};

export default InvertMessage;
