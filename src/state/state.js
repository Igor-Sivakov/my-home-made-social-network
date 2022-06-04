const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _callSubscriber() {
    console.lof('10100101010');
  },

  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          name: 'Dima',
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          message: 'Hey,how are you?',
          likeCounts: 15,
        },
        {
          id: 2,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Alina',
          message: "Yo, it's my fist post!",
          likeCounts: 21,
        },
        {
          id: 3,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Ben',
          message: 'Yes I am!',
          likeCounts: 12,
        },
        {
          id: 4,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Kim',
          message: 'Coco Loko! Alo Alo...',
          likeCounts: 36,
        },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Dima',
        },
        {
          id: 2,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Alina',
        },
        {
          id: 3,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Ben',
        },
        {
          id: 4,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Vitaliy',
        },
        {
          id: 5,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Olga',
        },
        {
          id: 6,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Kate',
        },
        {
          id: 7,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Caren',
        },
        {
          id: 8,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Kostya',
        },
        {
          id: 9,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Inna',
        },
        {
          id: 10,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Nick',
        },
        {
          id: 11,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Fiona',
        },
      ],
      messagesData: [
        {
          id: 1,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Dima',
          message: 'Hey,how are you?',
        },
        {
          id: 2,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Alina',
          message: 'I am fine.Are you ready to fun?',
        },
        {
          id: 3,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Ben',
          message: 'Yes I am!',
        },
        {
          id: 4,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Vitaliy',
          message: 'Coco Loko! Alo Alo...',
        },
        {
          id: 5,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Dima',
          message: 'Hey,how are you?',
        },
        {
          id: 6,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Alina',
          message: 'I am fine.Are you ready to fun?',
        },
        {
          id: 7,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Ben',
          message: 'Yes I am!',
        },
        {
          id: 8,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Vitaliy',
          message: 'Coco Loko! Alo Alo...',
        },
      ],
      newMessageText: '',
    },
    sideBar: {
      friendsData: [
        {
          id: 1,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Dima',
        },
        {
          id: 2,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Alina',
        },
        {
          id: 3,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Ben',
        },
        {
          id: 4,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Vitaliy',
        },
        {
          id: 5,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Olga',
        },
        {
          id: 6,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Kate',
        },
        {
          id: 7,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Caren',
        },
        {
          id: 8,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Kostya',
        },
        {
          id: 9,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Inna',
        },
        {
          id: 10,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Nick',
        },
        {
          id: 11,
          avatar:
            'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
          name: 'Fiona',
        },
      ],
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _addPost() {
    let randomId = Math.floor(Math.random() * 10) + 1;
    let newPost = {
      id: randomId,
      name: 'userName',
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      message: this._state.profilePage.newPostText,
      likeCounts: 0,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  _addMessage() {
    let randomId = Math.floor(Math.random() * 10) + 1;
    let newMessage = {
      id: randomId,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'userName',
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },

  _updateNewMessageText(newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newText);
    }
    if (action.type === ADD_MESSAGE) {
      this._addMessage();
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._updateNewMessageText(action.newMessage);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (messageText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: messageText,
});

export default store;
