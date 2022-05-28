import Dialog from './Dialog/Dialog';
import Messages from './Dialog/Messages/Messages';
import './Dialogs.css';

const Dialogs = () => {
  return (
    <div className='dialogs'>
      <h2 className='main-page__h2'>DIALOGS</h2>
      <div className='dialogs-wrapper'>
        <div className='users-conteiner'>
          <div className='users__inner'>
            <ul>
              <Dialog userName='Dima' />
              <Dialog userName='Alina' />
              <Dialog userName='Ben' />
              <Dialog userName='Vitaliy' />
              <Dialog userName='Olga' />
              <Dialog userName='Kate' classActive='active' />
              <Dialog userName='Caren' />
              <Dialog userName='Kostya' />
              <Dialog userName='Inna' />
              <Dialog userName='Nick' />
              <Dialog userName='Fiona' />
            </ul>
          </div>
        </div>
        <div className='messages-conteiner'>
          <Messages userName='Dima' message='Hey,how are you?' />
          <Messages userName='Igor' message='I am fine.Are you ready to fun?' />
          <Messages userName='Dima' message='Yes I am!' />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
