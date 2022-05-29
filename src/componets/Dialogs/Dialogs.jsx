import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import './Dialogs.css';

let dialogsData = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Alina' },
  { id: 3, name: 'Ben' },
  { id: 4, name: 'Vitaliy' },
  { id: 5, name: 'Olga' },
  { id: 6, name: 'Kate' },
  { id: 7, name: 'Caren' },
  { id: 8, name: 'Kostya' },
  { id: 9, name: 'Inna' },
  { id: 10, name: 'Nick' },
  { id: 11, name: 'Fiona' },
];

let messagesData = [
  { id: 1, name: 'Dima', message: 'Hey,how are you?' },
  { id: 2, name: 'Alina', message: 'I am fine.Are you ready to fun?' },
  { id: 3, name: 'Ben', message: 'Yes I am!' },
];

let dialogElements = dialogsData.map((dialog) => (
  <DialogItem name={dialog.name} id={dialog.id} />
));

let messageElements = messagesData.map((message) => (
  <Messages name={message.name} message={message.message} />
));

const Dialogs = (props) => {
  return (
    <div className='dialogs'>
      <h2 className='main-page__h2'>DIALOGS</h2>
      <div className='dialogs-wrapper'>
        <div className='users-conteiner'>
          <div className='users__inner'>
            <ul>{dialogElements}</ul>
          </div>
        </div>
        <div className='messages-conteiner'>{messageElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
