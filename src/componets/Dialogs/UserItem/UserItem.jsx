import './UserItem.css';

const UserItem = (props) => {
  return (
    <div className='userItem__avatar'>
      <img src={props.state.avatar} alt='message-avatar' />
      <p className='userItem__name'>{props.state.name}</p>
    </div>
  );
};

export default UserItem;
