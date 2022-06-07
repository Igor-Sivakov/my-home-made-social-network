const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    {
      id: 1,
      name: 'Dima',
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      message: 'Hey,how are you?',
      likeCounts: 15,
    },
    {
      id: 2,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Alina',
      message: "Yo, it's my fist post!",
      likeCounts: 21,
    },
    {
      id: 3,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Ben',
      message: 'Yes I am!',
      likeCounts: 12,
    },
    {
      id: 4,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Kim',
      message: 'Coco Loko! Alo Alo...',
      likeCounts: 36,
    },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let randomId = Math.floor(Math.random() * 10) + 1;
      let newPost = {
        id: randomId,
        name: 'userName',
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        message: state.newPostText,
        likeCounts: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = '';

      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;

      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
