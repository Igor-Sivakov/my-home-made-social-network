import './Messages.css';

const Messages = (props) => {
  return (
    <div className='message__item'>
      <div className='message__item__avatar'>
        <img
          src='https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'
          alt='message-avatar'
        />
        <p className='message__item__userName'>{props.name}</p>
      </div>
      <div className='message__item__innerText'>
        <p className='message__item__text'>{props.message}</p>
      </div>
    </div>
  );
};

export default Messages;
