import userInfoAvatar from '../img/userInfoAvatar.jpeg';
import userAvatar from '../img/userAvatar.jpeg';
import { profileAPI } from './../componets/API/API';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  postsData: [
    {
      id: 1,
      name: 'Dima',
      avatar: userAvatar,
      message: 'Hey,how are you?',
      likeCounts: 15,
    },
    {
      id: 2,
      avatar: userAvatar,
      name: 'Alina',
      message: "Yo, it's my fist post!",
      likeCounts: 21,
    },
    {
      id: 3,
      avatar: userAvatar,
      name: 'Ben',
      message: 'Yes I am!',
      likeCounts: 12,
    },
    {
      id: 4,
      avatar: userAvatar,
      name: 'Kim',
      message: 'Coco Loko! Alo Alo...',
      likeCounts: 36,
    },
  ],
  newPostText: '',
  profile: {
    id: 2,
    fullName: 'Sivakov Igor',
    aboutMe: 'I’ll come back and be stronger',
    lookingForAJobDescription: 'Looking for a job: //it-kamasutra.com',
    photos: {
      large: userInfoAvatar,
      small: userInfoAvatar,
    },
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let randomId = Math.floor(Math.random() * 10) + 4;
      let newPost = {
        id: randomId,
        name: 'userName',
        avatar: userAvatar,
        message: state.newPostText,
        likeCounts: 0,
      };

      return {
        ...state,
        newPostText: '',
        postsData: [...state.postsData, newPost],
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export default profileReducer;
