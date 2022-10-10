import userAvatar from '../../img/userAvatar.jpeg';
import { userAPI } from '../../componets/API/API';

const GET_FRIENDS_ITEMS = 'sideBar/GET_FRIENDS_ITEMS';

let initialState = {
  peoplesData: [
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
        peoplesData: action.peoples,
      };
    default:
      return state;
  }
};

export const getPeoplesItems = (peoples) => ({
  type: GET_FRIENDS_ITEMS,
  peoples,
});

export const getPeoples = () => {
  return async (dispatch) => {
    let response = await userAPI.getUser();
    dispatch(getPeoplesItems(response.data.items));
  };
};

export default sideBarReducer;
