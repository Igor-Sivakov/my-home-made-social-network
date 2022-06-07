const SEND_NEW_MESSAGE_BODY = 'SEND_NEW_MESSAGE_BODY';
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY';

let initialState = {
  dialogsData: [
    {
      id: 1,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Dima',
    },
    {
      id: 2,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Alina',
    },
    {
      id: 3,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Ben',
    },
    {
      id: 4,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Vitaliy',
    },
    {
      id: 5,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Olga',
    },
    {
      id: 6,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Kate',
    },
    {
      id: 7,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Caren',
    },
    {
      id: 8,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Kostya',
    },
    {
      id: 9,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Inna',
    },
    {
      id: 10,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Nick',
    },
    {
      id: 11,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Fiona',
    },
  ],
  messagesData: [
    {
      id: 1,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Dima',
      message: 'Hey,how are you?',
    },
    {
      id: 2,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Alina',
      message: 'I am fine.Are you ready to fun?',
    },
    {
      id: 3,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Ben',
      message: 'Yes I am!',
    },
    {
      id: 4,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Vitaliy',
      message: 'Coco Loko! Alo Alo...',
    },
    {
      id: 5,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Dima',
      message: 'Hey,how are you?',
    },
    {
      id: 6,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Alina',
      message: 'I am fine.Are you ready to fun?',
    },
    {
      id: 7,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Ben',
      message: 'Yes I am!',
    },
    {
      id: 8,
      avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
      name: 'Vitaliy',
      message: 'Coco Loko! Alo Alo...',
    },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NEW_MESSAGE_BODY:
      let randomId = Math.floor(Math.random() * 10) + 1;
      let messageBody = {
        id: randomId,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'userName',
        message: state.newMessageBody,
      };
      let stateCopy = { ...state };
      stateCopy.newMessageBody = [...state.newMessageBody];
      stateCopy.messagesData.push(messageBody);
      stateCopy.newMessageBody = '';

      return stateCopy;

    case UPDATE_MESSAGE_BODY: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.newMessage;

      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendNewMessageBodyActionCreator = () => ({
  type: SEND_NEW_MESSAGE_BODY,
});

export const updateMessageBodyActionCreator = (messageBody) => ({
  type: UPDATE_MESSAGE_BODY,
  newMessage: messageBody,
});

export default dialogsReducer;
