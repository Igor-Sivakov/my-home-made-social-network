//import { createSelector } from 'reselect';

export const getUsers = (state) => {
  return state.usersPage.usersData;
};

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getcurrentPage = (state) => {
  return state.usersPage.setCurrentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};

// example hard selector created by reselect
/* export const getUsersSuperSelector = createSelector(
  getUsers,
  getIsFetching,
  (users, isFetching) => {
    return users.filter((u) => true);
  }
);
 */
