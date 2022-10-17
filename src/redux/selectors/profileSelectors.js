export const getPostsData = (state) => {
  return state.profilePage.postsData;
};

export const getProfilePhotos = (state) => {
  return state.profilePage.profile.photos;
};

export const getProfileFullName = (state) => {
  return state.profilePage.profile.fullName;
};

export const getProfileAboutMe = (state) => {
  return state.profilePage.profile.aboutMe;
};

export const getProfileLookingForAJob = (state) => {
  return state.profilePage.profile.lookingForAJobDescription;
};

export const getProfileStatus = (state) => {
  return state.profilePage.status;
};

export const getProfile = (state) => {
  return state.profilePage.profile;
};

export const getProfileExtra = (state) => {
  return state.profilePage.profileExtraState;
};
