import userAvatar from '../img/userAvatar.jpeg';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  usersData: [
    {
      name: 'Leo Largo',
      photos: userAvatar,
      id: 1,
      country: 'USA',
      city: 'New York',
      status: 'Hi guys! Tomorrow I will be boarding, who is with me?',
    },
    {
      name: 'Finch',
      photos: userAvatar,
      id: 2,
      country: 'USA',
      city: 'Chicago',
      status: 'I am wery funny...',
    },
    {
      name: 'Tata',
      photos: userAvatar,
      id: 3,
      country: 'United Kingdom',
      city: 'London',
      status: 'Like boarding...',
    },
    {
      name: 'Vanessa Leais',
      photos: userAvatar,
      id: 4,
      country: 'Spain',
      city: 'Barselona',
      status: 'Beautiful & sexy.',
    },
    {
      name: 'Sasha Lenovskiy',
      photos: userAvatar,
      id: 5,
      country: 'Ukrain',
      city: 'Kiev',
      status: 'Yanki go home!!!',
    },
  ],
  pageSize: 5,
  totalUsersCount: 130,
  setCurrentPage: 1,
  isFetching: false,
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

    case SET_USERS: {
      return { ...state, usersData: action.users };
    }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});

export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export default usersReduser;
