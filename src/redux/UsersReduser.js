import userAvatar from '../img/userAvatar.jpeg';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

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
      followed: false,
    },
    {
      id: 2,
      name: 'Olya',
      familyName: 'Malow',
      avatar: userAvatar,
      status: 'I am a good boy first of all...',
      country: 'United States',
      city: 'New-York',
      followed: true,
    },
    {
      id: 3,
      name: 'Leonard',
      familyName: 'Kilipitch',
      avatar: userAvatar,
      status: 'I am a good boy first of all...',
      country: 'Italy',
      city: 'Rom',
      followed: false,
    },
    {
      id: 4,
      name: 'Mary',
      familyName: 'Wings',
      avatar: userAvatar,
      status: 'I am a good boy first of all...',
      country: 'Canada',
      city: 'Ottawa',
      followed: false,
    },
    {
      id: 5,
      name: 'Jason',
      familyName: 'Born',
      avatar: userAvatar,
      status: 'I am a good boy first of all...',
      country: 'United States',
      city: 'Detroid',
      followed: true,
    },
  ],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        usersData: [...state.usersData, ...action.users],
      };

    default:
      return state;
  }
};

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReduser;
