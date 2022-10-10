import userAvatar from '../../img/userAvatar.jpeg';
import userInfoAvatar from '../../img/userInfoAvatar.jpeg';
import { userAPI } from '../../componets/API/API';
import { findObjInArray } from '../../componets/utils/findObjInArrayHelper';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
  usersData: [
    {
      name: 'Leo Largo',
      photos: {
        large: userAvatar,
        small: userInfoAvatar,
      },
      id: 1,
      country: 'USA',
      city: 'New York',
      status: 'Hi guys! Tomorrow I will be boarding, who is with me?',
    },
    {
      name: 'Finch',
      photos: {
        large: userAvatar,
        small: userInfoAvatar,
      },
      id: 2,
      country: 'USA',
      city: 'Chicago',
      status: 'I am wery funny...',
    },
    {
      name: 'Tata',
      photos: {
        large: userAvatar,
        small: userInfoAvatar,
      },
      id: 3,
      country: 'United Kingdom',
      city: 'London',
      status: 'Like boarding...',
    },
    {
      name: 'Vanessa Leais',
      photos: {
        large: userAvatar,
        small: userInfoAvatar,
      },
      id: 4,
      country: 'Spain',
      city: 'Barselona',
      status: 'Beautiful & sexy.',
    },
    {
      name: 'Sasha Lenovskiy',
      photos: {
        large: userAvatar,
        small: userInfoAvatar,
      },
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
  followingInProgress: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: findObjInArray(state.usersData, 'id', action.userId, {
          followed: true,
        }),

        /* state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }), */
      };

    case UNFOLLOW:
      return {
        ...state,
        usersData: findObjInArray(state.usersData, 'id', action.userId, {
          followed: false,
        }),

        /*   state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }), */
      };

    case SET_USERS: {
      return { ...state, usersData: action.users };
    }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        setCurrentPage: action.pageNumber,
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

    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.inProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
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

export const toggleFollowingProgress = (inProgress, userId) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  inProgress,
  userId,
});

export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    let response = await userAPI.getUser(currentPage, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const getFollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), follow);
  };
};

export const getUnfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      userAPI.unfollow.bind(userAPI),
      unfollow
    );
  };
};

export default usersReduser;
