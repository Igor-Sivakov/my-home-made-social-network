import './UserItem.css';

const UserItem = ({ state: { avatar, name } }) => {
  return (
    <div className='userItem__avatar'>
      <img src={avatar} alt='message-avatar' />
      <p className='userItem__name'>{name}</p>
    </div>
  );
};

export default UserItem;
