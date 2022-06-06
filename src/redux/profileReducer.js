const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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
      debugger;
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
