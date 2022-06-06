const SEND_NEW_MESSAGE_BODY = 'SEND_NEW_MESSAGE_BODY';
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_NEW_MESSAGE_BODY:
      let randomId = Math.floor(Math.random() * 10) + 1;
      let messageBody = {
        id: randomId,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'userName',
        message: state.newMessageBody,
      };
      state.messagesData.push(messageBody);
      state.newMessageBody = '';

      return state;

    case UPDATE_MESSAGE_BODY:
      state.newMessageBody = action.newMessage;

      return state;

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
