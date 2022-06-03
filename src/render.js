import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  addMessage,
  addPost,
  updateNewPostText,
  updateNewMessageText,
} from './state/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        updateNewPostText={updateNewPostText}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>
  );
};
