import userAvatar from '../img/userAvatar.jpeg';

let initialState = {
  friendsData: [
    {
      id: 1,
      avatar: userAvatar,
      name: 'Dima',
    },
    {
      id: 2,
      avatar: userAvatar,
      name: 'Alina',
    },
    {
      id: 3,
      avatar: userAvatar,
      name: 'Ben',
    },
    {
      id: 4,
      avatar: userAvatar,
      name: 'Vitaliy',
    },
    {
      id: 5,
      avatar: userAvatar,
      name: 'Olga',
    },
    {
      id: 6,
      avatar: userAvatar,
      name: 'Kate',
    },
    {
      id: 7,
      avatar: userAvatar,
      name: 'Caren',
    },
    {
      id: 8,
      avatar: userAvatar,
      name: 'Kostya',
    },
    {
      id: 9,
      avatar: userAvatar,
      name: 'Inna',
    },
    {
      id: 10,
      avatar: userAvatar,
      name: 'Nick',
    },
    {
      id: 11,
      avatar: userAvatar,
      name: 'Fiona',
    },
  ],
};

const sideBarReducer = (state = initialState, action) => {
  return state;
};

export default sideBarReducer;
