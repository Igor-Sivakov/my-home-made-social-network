import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';

let selfMadeStore = {
  _callSubscriber() {
    console.log('10100101010');
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
      newMessageBody: '',
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

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  },
};

export default selfMadeStore;
