import userAvatar from '../img/userAvatar.jpeg';
import { userAPI } from '../componets/API/API';

const GET_FRIENDS_ITEMS = 'GET_FRIENDS_ITEMS';

let initialState = {
  friendsData: [
    {
      id: 1,
      photos: {
        large: userAvatar,
        small: userAvatar,
      },
      name: 'Dima',
    },
    {
      id: 2,
      photos: {
        large: userAvatar,
        small: userAvatar,
      },
      name: 'Alina',
    },
    {
      id: 3,
      photos: {
        large: userAvatar,
        small: userAvatar,
      },
      name: 'Ben',
    },
    {
      id: 4,
      photos: {
        large: userAvatar,
        small: userAvatar,
      },
      name: 'Vitaliy',
    },
    {
      id: 5,
      photos: {
        large: userAvatar,
        small: userAvatar,
      },
      name: 'Olga',
    },
    {
      id: 6,
      photos: {
        large: userAvatar,
        small: userAvatar,
      },
      name: 'Kate',
    },
    {
      id: 7,
      photos: {
        large: userAvatar,
        small: userAvatar,
      },
      name: 'Caren',
    },
    {
      id: 8,
      photos: {
        large: userAvatar,
        small: userAvatar,
      },
      name: 'Kostya',
    },
    {
      id: 9,
      photos: {
        large: userAvatar,
        small: userAvatar,
      },
      name: 'Inna',
    },
  ],
};

const sideBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS_ITEMS:
      return {
        ...state,
        friendsData: action.friends,
      };
    default:
      return state;
  }
};

export const getFriendsItems = (friends) => ({
  type: GET_FRIENDS_ITEMS,
  friends,
});

export const getFriends = () => {
  return (dispatch) => {
    userAPI.getUser().then((data) => {
      dispatch(getFriendsItems(data.items));
    });
  };
};

export default sideBarReducer;
