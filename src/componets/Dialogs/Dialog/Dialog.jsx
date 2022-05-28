import './Dialog.css';

const Dialog = (props) => {
  return (
    <li className='users__inner__item'>
      <a
        href='#'
        alt='#'
        className={'users__inner__link' + ' ' + props.classActive}
      >
        {props.userName}
      </a>
    </li>
  );
};

export default Dialog;

/*  'users__inner__link'*/
