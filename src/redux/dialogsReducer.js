import userAvatar from '../img/userAvatar.jpeg';

const SEND_NEW_MESSAGE_BODY = 'SEND_NEW_MESSAGE_BODY';

let initialState = {
  dialogsData: [
    {
      id: 1,
      avatar: userAvatar,
      name: 'Dima',
    },
    {
      id: 2,
      avatar: userAvatar,
      name: 'Alina',
    },
    {
      id: 3,
      avatar: userAvatar,
      name: 'Ben',
    },
    {
      id: 4,
      avatar: userAvatar,
      name: 'Vitaliy',
    },
    {
      id: 5,
      avatar: userAvatar,
      name: 'Olga',
    },
    {
      id: 6,
      avatar: userAvatar,
      name: 'Kate',
    },
    {
      id: 7,
      avatar: userAvatar,
      name: 'Caren',
    },
    {
      id: 8,
      avatar: userAvatar,
      name: 'Kostya',
    },
    {
      id: 9,
      avatar: userAvatar,
      name: 'Inna',
    },
    {
      id: 10,
      avatar: userAvatar,
      name: 'Nick',
    },
    {
      id: 11,
      avatar: userAvatar,
      name: 'Fiona',
    },
  ],
  messagesData: [
    {
      id: 1,
      avatar: userAvatar,
      name: 'Dima',
      message: 'Hey,how are you?',
    },
    {
      id: 2,
      avatar: userAvatar,
      name: 'Alina',
      message: 'I am fine.Are you ready to fun?',
    },
    {
      id: 3,
      avatar: userAvatar,
      name: 'Ben',
      message: 'Yes I am!',
    },
    {
      id: 4,
      avatar: userAvatar,
      name: 'Vitaliy',
      message: 'Coco Loko! Alo Alo...',
    },
    {
      id: 5,
      avatar: userAvatar,
      name: 'Dima',
      message: 'Hey,how are you?',
    },
    {
      id: 6,
      avatar: userAvatar,
      name: 'Alina',
      message: 'I am fine.Are you ready to fun?',
    },
    {
      id: 7,
      avatar: userAvatar,
      name: 'Ben',
      message: 'Yes I am!',
    },
    {
      id: 8,
      avatar: userAvatar,
      name: 'Vitaliy',
      message: 'Coco Loko! Alo Alo...',
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NEW_MESSAGE_BODY:
      let randomId = Math.floor(Math.random() * 10) + 8;
      let messageBody = {
        id: randomId,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Vitaliy',
        message: action.message,
      };

      return {
        ...state,
        messagesData: [...state.messagesData, messageBody],
      };

    default:
      return state;
  }
};

export const sendNewMessageBody = (message) => ({
  type: SEND_NEW_MESSAGE_BODY,
  message,
});

export default dialogsReducer;
