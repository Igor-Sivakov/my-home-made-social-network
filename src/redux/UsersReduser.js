import userAvatar from '../img/userAvatar.jpeg';

let initialState = {
  usersData: [
    {
      id: 1,
      name: 'Dima',
      familyName: 'Solovey',
      avatar: userAvatar,
      status: 'I am a good boy first of all...',
      country: 'France',
      city: 'Paris',
      subscribe: 'follow',
    },
    {
      id: 2,
      name: 'Olya',
      familyName: 'Malow',
      avatar: userAvatar,
      status: 'I am a good boy first of all...',
      country: 'United States',
      city: 'New-York',
      subscribe: 'unfollow',
    },
    {
      id: 3,
      name: 'Leonard',
      familyName: 'Kilipitch',
      avatar: userAvatar,
      status: 'I am a good boy first of all...',
      country: 'Italy',
      city: 'Rom',
      subscribe: 'follow',
    },
    {
      id: 4,
      name: 'Mary',
      familyName: 'Wings',
      avatar: userAvatar,
      status: 'I am a good boy first of all...',
      country: 'Canada',
      city: 'Ottawa',
      subscribe: 'unfollow',
    },
    {
      id: 5,
      name: 'Jason',
      familyName: 'Born',
      avatar: userAvatar,
      status: 'I am a good boy first of all...',
      country: 'United States',
      city: 'Detroid',
      subscribe: 'follow',
    },
  ],
};

const usersReduser = (state = initialState, action) => {
  return state;
};

export default usersReduser;
